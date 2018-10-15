import React, { Component } from 'react'

import classNames from 'classnames'

import './styles.css'

class MugiMenu extends Component {

    constructor(props) {
        super(props)
        this.renderItem = this.renderItem.bind(this)
    }

    renderItem(item,i) {
        if (typeof item == 'string') {
            let onClick = (e) => this.props.onItemClick(item)
            return <li key={i}><button onClick={onClick}>{item}</button></li>
        } else if (typeof item == 'object') {
            let onClick = (e) => this.props.onItemClick(item.name)
            var children = null
            if (item.children) {
                children = item.children.map( (child,j) => this.renderItem(child,j) )
                children = <ul className="dropdown">{children}</ul>
            }
            
            if (item.icon) {
                var icon = <img src={item.icon} />
                var caption = <span class="caption">{item.caption}</span>
                let classNames_ = classNames({'with-icon':true,'without-caption':item.caption == null})
                return <li key={i}><button className={classNames_} onClick={onClick}>{icon}&nbsp;{caption}</button>{children}</li>
            }

            var caption = <span class="caption">{item.caption ? item.caption : item.name}</span>
            return <li key={i}><button onClick={onClick}> {caption}</button>{children}</li>
        }
        console.log(item,i)
        return <span>error</span>
    }

    render() {
        var {items} = this.props
        var children = items.map( (item,i) => this.renderItem(item,i) )
        return <div className={this.props.className}><ul className="mugi-menu">{children}</ul><div className="clear-both"></div></div>
    }
}

export default MugiMenu