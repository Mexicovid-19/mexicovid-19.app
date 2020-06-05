import React from 'react';
import * as colors from '../constants/colors';
import Typography from '@material-ui/core/Typography';
import {
	MapRoundedIcon,
	AccessAlarmRoundedIcon,
	ArrowBackIosOutlined,
	ArrowBack
} from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles';

class MasterDetailView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sidebarVisible: true,
            selectedSection: 0
        }
    }
    componentDidMount(){

    }
    render(){
        const isMobile = window.innerWidth < 1000;
        const { classes } = this.props;
        return(
            <div className={classes.container}>
                {this.state.sidebarVisible || !isMobile ? (
                    <div className={classes.sidebar}>
                        {this.props.sidebarHeader||null}
                        {this.props.sections.map((section, i)=>(
                            <section className={classes.sidebarItem}
                                style={{borderColor: this.state.selectedSection==i? colors.BLUE : '', background: this.state.selectedSection==i? colors.GRAY : 'rgb(240,240,240)'}}
                                onClick={()=>{
                                   this.setState({
                                       sidebarVisible: false,
                                       selectedSection: i
                                   }) 
                                }}
                            >
                                <Typography className={classes.sidebarItemTitle} variant={'h2'}>{section.title}</Typography>
                                <p className={classes.sidebarItemText} dangerouslySetInnerHTML={{__html: section.subtitle}}></p>
		 					    <p className={classes.sidebarItemText} dangerouslySetInnerHTML={{__html: section.description}}></p>
                            </section>
                        ))}
                    </div>
                ):null}
                <div className={classes.content}>
                    <div className={classes.contentHeader}>
                        {isMobile ? (
                            <ArrowBack onClick={()=>{ this.setState({sidebarVisible: true}) }} ></ArrowBack>
                        ):null}
                        <Typography className={classes.sidebarItemTitle} variant={'h2'}>{this.props.sections[this.state.selectedSection].title}</Typography>
                    </div>
                    {this.props.sections[this.state.selectedSection].render()}
                </div>
            </div>
        )
    }
}
const isMobile = true;
const styles = () => ({
    container: {
        display: 'flex', width: '100%', background: 'blue', height: '100%', overflow: 'hidden'
    },
    sidebar: {
		padding: '16px',
        // background: colors.WHITE,
        background: 'white', 
		height: '100%',
		width: '500px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		overflow: 'auto',
		zIndex: 10,
		"& > *": {
			flexShrink: 0
		},
		flexShrink: 0,
		boxSizing: 'border-box'
    },
    sidebarItem: {
		margin: '20px 0px',
    	borderRadius: '5px',
    	padding: '20px',
		backgroundColor: colors.GRAY,
		display: 'flex', 
		flexDirection: 'column',
		borderStyle: 'solid', 
		borderWidth: 2,
		borderColor: 'transparent'
    },
    sidebarItemTitle: {
        fontSize: '24px',
		marginBottom: '8px',
		marginTop: '8px',
		fontWeight: 'bold'
    },
    sidebarItemText:{
        textAlign:'justify',
		margin: '4px 0px'
    },
    content: {
        flex: 1, 
		backgroundColor: 'white',
		padding: '16px',
		width: '100%',
		flex: 1,
		height: '100%',
		display: 'flex', 
		flexDirection: 'column',
		position: 'relative',
		overflow: 'auto'
    },
    contentHeader: {
        display: 'flex', 
        alignItems: 'center', 
        paddingLeft: isMobile? '16px': 0, 
        paddingRight: isMobile? '16px': 0
    },
    [`@media (max-width: ${1000}px)`]: {
        sidebar: {
			position: 'fixed',
			width: '100%',
			top: '64px',
			bottom: 0
		}, 
		
    }
})

export default withStyles(styles)(MasterDetailView)