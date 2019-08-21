import React, { Component } from 'react';
import Select from 'react-select';
import './input-project.css';

const customStyles = {
    container: (provided) => ({
        ...provided,
        width: '424px',
        height: '36px',
        borderRadius: '8px',
        outline: 'none',
        position: 'absolute',
        left: 0,
    }),
    control: (provided, state) => ({
        ...provided,
        width: '424px',
        border: 'none',
        borderRadius: '8px',
        position: 'absolute',
        left: '0',
        background: 'none',
        fontSize: '14px',
        boxShadow: state.isSelected ? 'none' : 'none',
    }),
    option: (provided, state) => ({
        ...provided,
        background: state.isSelected ? '#ECECEC' : 'white',
        width: '424px',
        height: '36px',
        color: '#1C1A1A',
        fontSize: '14px',
    }),

    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
        const paddingBottom = '4px';
        return { ...provided, opacity, transition, paddingBottom };
    },
    indicatorsContainer: (provided) => ({
        ...provided,
        height: '36px',
        backgroundImage: 'none',
        background: 'url(images/icons/dropdown-list-arrow-down.svg) center no-repeat',
        borderRadius: '8px',
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        width: '0',
    }),
    loadingIndicator: (provided) => ({
        ...provided,
        width: '0',
    }),
    menu: (provided) => ({
        ...provided,
        zIndex: '100',
    }),
    placeholder: (provided) => ({
        ...provided,
        fontSize: '14px',
        paddingBottom: '4px'
    }),
}

export default function InputProject ({data, handleProjectChange,  selectedOption}) {
    
        const array = data.map(el => el.projects.map(element => {
            return ({ 'value': element.title, 'label': element.title, 'id': element.id })
        }
        ))
        let options = []
        array.map(el => {
            options = [...options, ...el]
        })
        return (
            
            <div className='related-project'>
                <span>Related project</span>
                <div className='filter_select'>
                    <Select
                        onChange={handleProjectChange}
                        options={options}
                        placeholder={selectedOption ? selectedOption.value : 'Placeholder text'}
                        styles={customStyles}
                    />
                </div>
                <div className='filters_line'></div>
            </div>

        )
    }
