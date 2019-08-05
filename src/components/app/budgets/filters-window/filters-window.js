import React, { Component } from 'react';
import './filters-window.css';



export default class FiltersWindow extends Component {
    constructor(props) {
        super();
        this.state = {
            value: '',
            project: '',
            slider: 100,
            range: 30000
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleProjectChange = this.handleProjectChange.bind(this);
        this.handleSliderChange = this.handleSliderChange.bind(this);
        this.handleRangeChange = this.handleRangeChange.bind(this);
        this.clear = this.clear.bind(this);
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
    clear() {
        this.setState({
            value: '',
            project: '',
            slider: 0,
            range: 50000
        })
    }
    render() {
      
        const { value, project, slider, range } = this.state;
        let styleSlider = {
            marginLeft: slider / 135 + 'px'
        }
        let styleRange = {
            marginLeft: range / 135 + 'px'
        }
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
                    >Apply</button>
                </div>

                <div className='filters-group'>

                    {/* Created Date*/}

                    <div className='created-date'>
                        <span>Created date</span>
                        <input
                            type='datetime-local'
                            value={value}
                            onChange={this.handleChange}
                        />

                    </div>

                    {/* Related project*/}

                    <div className='related-project'>
                        <span>Related project</span>
                        <select
                            value={project}
                            onChange={this.handleProjectChange}
                        >
                            <option value=''></option>
                           {/*} {termDataTable.map(el => el.projects.map(element => <option key={element.id}>
                                {element.name}</option>))}*/}

                        </select>
                    </div>

                    {/* Amount total range*/}

                    <div className='amount-total-range'>
                        <span>Amount total range, $</span>
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
                    </div>


                    {/* Amount remaining is*/}

                    <div className='amount-remaining-is'>
                        <span>Amount remaining is:</span>
                        <div className='img-span'><img
                            src='https://vodkamishka.github.io/janus-test-app/images/icons-png/checkbox-enable.png' 
                            alt='checkbox-applyed' /><span>Enough</span></div>
                        <div className='img-span'><img
                            
                            src='https://vodkamishka.github.io/janus-test-app/images/icons-png/checkbox-enable.png'
                            alt='checkbox-applyed' /><span>Exceeded</span></div>
                        <div className='img-span'><img
                            
                            src= 'https://vodkamishka.github.io/janus-test-app/images/icons-png/checkbox-enable.png' 
                            alt='checkbox-applyed' /><span>Close to the end</span></div>
                    </div>
                </div>
            </div>
        )
    }
}