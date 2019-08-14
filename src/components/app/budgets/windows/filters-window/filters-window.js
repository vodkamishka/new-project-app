import React, { Component } from 'react';
import './filters-window.css';



export default class FiltersWindow extends Component {
    constructor(props) {
        super();
        this.state = {
            value: '',
            project: '',
            slider: 0,
            range: 50000
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleProjectChange = this.handleProjectChange.bind(this);
        this.handleSliderChange = this.handleSliderChange.bind(this);
        this.handleRangeChange = this.handleRangeChange.bind(this);
        this.clear = this.clear.bind(this);
        this.changeRangeRight= this.changeRangeRight.bind(this);
        this.changeRangeLeft= this.changeRangeLeft.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleProjectChange(event) {
        this.setState({ project: event.target.value })
    }
    handleSliderChange(event) {
        this.setState({ slider: event.target.value })
    }
    handleRangeChange(event) {
        this.setState({ range: event.target.value })
    }
    changeRangeRight() {
        if (this.state.range < 50000) {
        this.setState({
            range: this.state.range + 1000
        })}
    }
    changeRangeLeft() {
        if (this.state.range > 0) {
        this.setState({
            range: this.state.range - 1000
        })}
    }
    clear() {
        this.setState({
            value: '2018-11-05',
            project: '',
            slider: 0,
            range: 50000
        })
    }
    render() {
        
        const { value, project, range, slider } = this.state;
        const { budgetsFiltered, filtersWindowToggled, data} = this.props;
        let styleSlider = {
            marginLeft: slider / 147 + 'px'
        }
        let styleRange = {
            marginLeft: range / 147 + 'px'
        }

        let projectId  = null;
        data.forEach(el => {el.projects.forEach(element => {
            if (element.title === project) projectId = element.id
        })
        });
        return (
            <div className='filters-window'>

                {/* title filters and buttons clear and apply */}

                <div className='filters-buttons' >
                    <span>Filters</span>
                    <button className='button clear'
                        onClick={() => {
                            this.clear()
                        }}
                    >Clear</button>
                    <button 
                    className='button apply'
                    onClick = {() => {
                        budgetsFiltered(value, projectId, range);
                        filtersWindowToggled()
                    }}
                    >Apply</button>
                </div>

                <div className='filters-group'>

                    {/* Created Date*/}

                    <div className='created-date'>
                        <span>Created date</span>
                        <input
                            type='date'
                            className='datetime-local'
                            value={value}
                            onChange={this.handleChange}
                        />
                        <div className='filters_line'></div>
                    </div>

                    {/* Related project*/}

                    <div className='related-project'>
                        <span>Related project</span>
                        <select
                            className='filter_select'
                            value={project}
                            onChange={this.handleProjectChange}
                        >
                            <option value=''></option>
                            {data.map(el => el.projects.map(element => <option key={element.id}>
                                {element.title}</option>))}

                        </select>
                        <div className='filters_line'></div>
                    </div>

                    {/* Amount total range*/}

                    <div className='amount-total-range'>
                        <span>Amount total range, $</span>
                        <div className='filter-plus-minus twix1'>
                            <div><img src='images/icons/plus-black.svg' alt='plus' /></div>
                            <div><img src='images/icons/minus.svg' alt='minus' /></div>
                        </div>
                        <div className='slider-container'>

                            <input
                                type='range'
                                className='slider'
                                min='0'
                                max='50000'
                                value={slider}
                                onChange={this.handleSliderChange}
                            />
                            <div className='slider-observer'
                                style={styleSlider}
                            >{slider}</div>

                            <input
                                type='range'
                                className='slider'
                                min='0'
                                max='50000'
                                value={range}
                                onChange={this.handleRangeChange}
                            />
                            <div className='slider-observer'
                                style={styleRange}
                            >{range}</div>
                        </div>
                        <div className='filters_line'></div>
                        <div className='filter-plus-minus twix2'>
                            <div><img 
                             src='images/icons/plus-black.svg'
                             alt='plus'
                             onClick={this.changeRangeRight}
                             /></div>
                            <div><img src='images/icons/minus.svg' 
                            alt='minus'
                            onClick={this.changeRangeLeft}
                            /></div>
                        </div>
                    </div>


                    {/* Amount remaining is*/}

                    <div className='amount-remaining-is'>
                        <span>Amount remaining is:</span>
                        <div className='img-span-span1'><img
                            src='images/icons/check-box-checked.svg'
                            alt='checkbox-applyed' /><span>Enough</span></div>
                        <div className='img-span-span2'><img

                            src='images/icons/check-box-checked.svg'
                            alt='checkbox-applyed' /><span>Exceeded</span></div>
                        <div className='img-span-span3'><img

                            src='images/icons/check-box-checked.svg'
                            alt='checkbox-applyed' /><span>Close to the end</span></div>
                    </div>
                </div>
            </div>
        )
    }
}