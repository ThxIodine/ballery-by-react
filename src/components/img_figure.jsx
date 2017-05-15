import React from 'react';
import img_figure_style from '../css/img_figure_style.css';

export default class ImgFigure extends React.Component{
	handleClick(e){
		e.stopPropagation();
		e.preventDefault();
		if(this.props.arrange.isCenter){
			this.props.inverse();
		}else{
			this.props.center();
		}
	};
	render(){
		var styleObj = {};
		//如果props属性中制定了这张图片的位置，则使用
		if(this.props.arrange){
			styleObj = this.props.arrange.pos;
			(['MozTransform', 'msTransform', 'WebkitTransform', 'transform']).forEach((value)=>{
				styleObj[value] = `rotate(${this.props.arrange.rotate}deg)`;
			})
		}
		// 如果是居中的图片， z-index设为11
		if(this.props.arrange.isCenter){
			styleObj.zIndex = 11;
		}

		var ImgFigureClassName = 'img-figure';
			ImgFigureClassName += this.props.arrange.isInverse ? ' is-inverse' : '';

		return(
			<figure className={ImgFigureClassName} style={styleObj} onClick={this.handleClick.bind(this)} >
				<img src={this.props.data.imageUrl} alt={this.props.data.title} />
				<figcaption>
					<h2 className='img-title'>{this.props.data.title}</h2>
					<div className="img-back" onClick={this.handleClick.bind(this)}>
                        <p>
                        	{this.props.data.desc}
                        </p>
                    </div>
				</figcaption>
			</figure>
		)
	}
}