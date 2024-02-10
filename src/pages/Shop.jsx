import React, { useEffect, useState } from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";

import "../styles/shop.css";

import ProductsList from "../components/UI/ProductsList";
import useGetData from "../custom-hooks/useGetData";

const Shop = () => {
	const { data } = useGetData();
  const [newData, setNewData] = useState([])
  const [category, setCategory] = useState("")
  const [order, setOrder] = useState('ascending')
  console.log(order)
  console.log(category)
  useEffect(()=>{
    if(!category){
      setNewData(data)
     }
    else{
      const tempData = data.filter(item => item.category === category)
      setNewData(tempData)
    }
    
  },[category, data]);
  useEffect(()=>{
    if(order==='ascending'){
      const assData = newData.slice().sort((a, b) => a.price - b.price)
      setNewData(assData)
    }
    else{
      const assData = newData.slice().sort((a, b) =>  b.price - a.price)
      setNewData(assData)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[order])
	return (
		<Helmet title="Shop">
			<CommonSection title="Products" />

			<section>
				<Container>
					<Row>
						<Col lg="3" md="6">
							<div className="filter__widget">
								<form onChange={(event) => setCategory(event.target.value)}>

									<select id="categoryFilter" name="categoryFilter">
										<option value="">All Categories</option>
										<option value="toycar">Toy-Car</option>
										<option value="games">Games</option>
										<option value="cycle">Cycle</option>
									</select>
								</form>
							</div>
						</Col>
						<Col lg="3" md="6" className="text-end">
							<div className="filter__widget">
								<form onChange={(event) => setOrder(event.target.value)}>
									<label htmlFor="sortBy" >Sort By  :</label>
									<select id="sortBy" name="sortBy">

										<option value="">Any</option>
										<option value="ascending">Ascending</option>
										<option value="descending">Descending</option>
									</select>
								</form>
							</div>
						</Col>
						<Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search......"
                 
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
					</Row>
				</Container>
			</section>

			<section className="pt-0">
				<Container>
					<Row>
						{newData?.length === 0 ? (
							<h1 className="text-center fs-4">No products are found!</h1>
						) : (
							<ProductsList data={newData} />
						)}
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default Shop;
