import React from 'react';
import controller_unit_style from '../css/controller_unit_style.css';

export default class ControllerUnit extends React.Component{
	handleClick(e) {
        e.preventDefault();
        e.stopPropagation();
		// 如果点击的是当前正在选中态的按钮，则翻转图片，否则将对应的图片居中
        if (this.props.arrange.isCenter) {
            this.props.inverse();
        } else {
            this.props.center();
        }
	};
	render(){		
		var controllerUnitClassName = 'controller-unit';
		// 如果对应的是居中的图片，显示控制按钮的居中态
        if (this.props.arrange.isCenter) {
            controllerUnitClassName += " is-center";
            // 如果同时对应的是翻转图片， 显示控制按钮的翻转态
            if (this.props.arrange.isInverse) {
                controllerUnitClassName += " con-is-inverse";
            }
        }
		return(
			<span className = {controllerUnitClassName} onClick={this.handleClick.bind(this)} ></span>
		)
	};
}