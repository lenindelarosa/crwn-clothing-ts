import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import CategoriesPreview from '../categories-preview/categories-preview.component';
import CategoryDisplay from '../category-display/category-display.component';
import './shop.styles.scss'
import { fetchCategoriesAsync } from '../../store/categories/category.action';

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesAsync());
    }, [dispatch]);

    return(
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path='/:category' element={<CategoryDisplay />}/>
        </Routes>
    );
};

export default Shop;