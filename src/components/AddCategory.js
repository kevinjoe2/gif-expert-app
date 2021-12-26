import { useState } from "react"
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid';

export const AddCategory = ({ setcategory }) => {

    const [value, setValue] = useState('');

    const handleSubmitValue = (e) => {
        e.preventDefault();
        if (value.trim().length >= 2) {
            setcategory(ctg => [{value:value,id:uuidv4()}, ...ctg, ]);
            setValue('');
        }
    };

    const handleChangeValue = ({ target }) => {
        setValue(target.value);
    };

    return (
        <form onSubmit={handleSubmitValue}>
            <div className="container-fluid mb-3">
                <label htmlFor="ctg" className="form-label">Agregar Nueva Categoria</label>
                <input
                    type="text"
                    className="form-control"
                    id="ctg"
                    placeholder="Buscar un GIF"
                    onChange={handleChangeValue}
                    value={value}
                    autoComplete="off"
                />
                <div className="invalid-feedback">
                    Please provide a valid city.
                </div>
            </div>
        </form>
    );
}

AddCategory.propTypes = {
    setcategory: PropTypes.func.isRequired
}

