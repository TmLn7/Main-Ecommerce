import styled from "styled-components";
import Navbar from "../Components/Navbar"
import Products from "../Components/Products";
import Footer from "../Components/Footer";
import { useLocation } from "react-router";
import { useState } from "react";


const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Бараа шүүх</FilterText>
            <Select name="length" onChange={handleFilters}>
              <Option disabled>Тоо , Хэмжээ</Option>
              <Option>1</Option>
              <Option>50M</Option>
              <Option>100M</Option>
            </Select>
            <Select name="size" onChange={handleFilters}>
              <Option disabled>Диаметр</Option>
              <Option>8x5</Option>
              <Option>10x6.5</Option>
              <Option>12x8</Option>
              <Option>16</Option>
              <Option>20</Option>
              <Option>25</Option>
              <Option>32</Option>
              <Option>50</Option>
            </Select>
        </Filter>
        <Filter>
          <FilterText>Бараа ангилах</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Шинэ</Option>
            <Option value="desc">Үнэ их</Option>
            <Option value="asc">Үнэ бага</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Footer />
    </Container>
  );
};

export default ProductList;
