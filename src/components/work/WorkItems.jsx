import React from 'react'

const WorkItems = ({ item }) => {
    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className='work__img' />
            <h3 className="work__title">{item.title}</h3>
            <div className='link__data'>
            <a href={item.link} target='_blank' rel='noreferrer' className="work__button">
                {item.demo === 'yes' ? 'Demo' : 'GitHub'}
                {item.demo === 'yes' ? <i className="bx bx-right-arrow-alt work__button-icon"></i> : <i className="bx bxl-github work__button-icon"></i>}
            </a>
            </div>
        </div>
    )
}

export default WorkItems