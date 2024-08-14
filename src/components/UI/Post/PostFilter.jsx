import React from "react";
import MainSelect from "../Select/MainSelect";
import MainInput from "../Input/MainInput";


const PostFilter = ({filter, setFilter}) => {
    return (
        // ...поле_нейм - развёртывание массива
        <div>
            <MainInput
                placeholder="Поиск..."
                value={filter.query}
                onChange={e=>setFilter({...filter, query: e.target.value})}
            />
            <MainSelect
                value = {filter.sort}
                onChange = {selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка"
                options = {[
                {value:"title", inner:"По названию"},
                {value:"body", inner:"По описанию"},
                {value:"id", inner:"По номеру"},
                ]
                }
            />
        </div>
    )
}

export default PostFilter;