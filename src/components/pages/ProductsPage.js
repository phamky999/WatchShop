import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, Outlet } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import ProductCardItem from "../Products/ProductCardItem";
import ProductsSidebar from "./productspage/ProductsSidebar";
import "./ProductsPage.css";

function ProductsPage() {
  const [isShowMobileSlidebar, setIsShowMobileSlidebar] = useState(false);
  const dataIn = useSelector((state) => state.products);
  const { products, categories, colors, materials, size, tag, priceFilter } =
    dataIn;
  const [productsList, setProductsList] = useState([]);
  const [sortProducts, setSortProducts] = useState("1");
  const selectMdRef = useRef(null);

  // const [filterState, setFilterState] = useState([
  //   { group: "categories", filterArr: [] },
  //   { group: "colors", filterArr: [] },
  //   { group: "materials", filterArr: [] },
  //   { group: "sizes", filterArr: [] },
  //   { group: "tags", filterArr: [] },
  //   { group: "price", filterArr: [] },
    
  // ]);
  const showSlidebarHandler = (event) => {
    event.preventDefault();
    setIsShowMobileSlidebar(true);
  };
  const closeSlidebarHandler = (event) => {
    setIsShowMobileSlidebar(false);
  };
  // const removeFilterHandler = () => {
  //   setFilterProduct({
  //     categories: [],
  //     colors: [],
  //     materials: [],
  //     size: [],
  //     price: [],
  //     tags: [],
  //   });
  // };

  const sortBySelector = (option) => {
    switch (option) {
      case "1":
        //a-z
        setProductsList((prevState) => {
          return [...prevState].sort((a, b) =>
            a.name > b.name ? 1 : b.name > a.name ? -1 : 0
          );
        });
        break;
      case "2":
        //z-a
        setProductsList((prevState) => {
          return [...prevState].sort((a, b) =>
            b.name > a.name ? 1 : a.name > b.name ? -1 : 0
          );
        });
        break;
      case "3":
        //new- old
        setProductsList((prevState) => {
          return [...prevState].sort(
            (a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)
          );
        });
        break;
      case "4":
        //old - new
        setProductsList((prevState) => {
          return [...prevState].sort(
            (a, b) => new Date(a.dateCreated) - new Date(b.dateCreated)
          );
        });
        break;
      case "5":
        //high to low
        setProductsList((prevState) => {
          return [...prevState].sort((a, b) => b.priceSaleOf - a.priceSaleOf);
        });
        break;
      case "6":
        // low to high
        setProductsList((prevState) => {
          return [...prevState].sort((a, b) => a.priceSaleOf - b.priceSaleOf);
        });
        break;
      default:
        return productsList;
    }
  };
  const changeSelectionHandler = async (event) => {
    if (event.target.value !== sortProducts) {
      setSortProducts(event.target.value);
      sortBySelector(event.target.value);
    }
  };

  useEffect(() => {
    console.log("useEffect1");

    setProductsList(
      [...products].sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      )
    );
  }, [products]);
  // const FilterByCondition = (
  //   arrFilter = [],
  //   conditionName,
  //   conditions = []
  // ) => {
  //   if (arrFilter.length > 0 && conditions.length > 0) {
  //     let arr = [];
  //     let arrResult = [];
  //     let arrLength = arrFilter.length;
  //     let conditionLength = conditions.length;
  //     for (let i = 0; i < conditionLength; i++) {
  //       for (let j = 0; j < arrLength; j++) {
  //         if (
  //           arrFilter[j][conditionName] !== undefined &&
  //           arrFilter[j][conditionName].length > 0
  //         ) {
  //           for (let k = 0; k < arrFilter[j][conditionName].length; k++) {
  //             if (arrFilter[j][conditionName][k] === conditions[i]) {
  //               arr.push(arrFilter[j]);
  //             }
  //           }
  //         }
  //       }
  //     }
  //     arrResult = arr.filter(function (item) {
  //       return arrResult.includes(item) ? "" : arrResult.push(item);
  //     });
  //     return arrResult;
  //   } else {
  //     return;
  //   }
  // };

  // const filterSubmitHandler = (newFilter) => {};

  // const changeFilterHandler = (group, id, status) => {
  //   console.log(group, id, status);
  //   let isGroupFilterEmty = true;
  //   if (status) {
  //     filterState.forEach(element => {
  //       if(element.group === group) {
  //         if(element.filterArr.length > 0){
  //           isGroupFilterEmty = false;
  //         }
  //         else {
  //           isGroupFilterEmty = true;
  //         }
  //       }
  //     });
  //     if(isGroupFilterEmty){
  //       console.log(productsList);
  //     }







  //     const newFliter = filterState.map( item => {
  //       if(item.group === group) {
  //         return {
  //           group: item.group,
  //           filterArr: [...item.filterArr, id]
  //         }
  //       }
  //       else{
  //         return item;
  //       }
  //     });
  //     setFilterState([...newFliter]);
  //   }
  //   else{
  //     const newFliter = filterState.map( item => {
  //       if(item.group === group) {
  //         return {
  //           group: item.group,
  //           filterArr: item.filterArr.filter(item => item !== id)
  //         }
  //       }
  //       else{
  //         return item;
  //       }
  //     });
  //     setFilterState([...newFliter]);
  //   }
  // };

  return (
    <div className="products-page">
      <div className="container-xl">
        <div>
          <h2>Products</h2>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <ProductsSidebar
              isShowMobile={isShowMobileSlidebar}
              onClose={closeSlidebarHandler}
              // onChangeFilter={changeFilterHandler}
              // onRemove={removeFilterHandler}
              // filterSubmit={filterSubmitHandler}
              categories={categories}
              colors={colors}
              materials={materials}
              size={size}
              tag={tag}
              priceFilter={priceFilter}
            />
          </div>
          <div className="col-lg-9">
            <div className="slidebar-control-md">
              <div onClick={showSlidebarHandler}>
                <i className="bx bx-filter-alt"></i>
                <span>Menu</span>
              </div>
              <div>
                <select
                  ref={selectMdRef}
                  className=""
                  onChange={changeSelectionHandler}
                  value={sortProducts}
                >
                  <option value="1">Alphabetically, A-Z</option>
                  <option value="2">Alphabetically, Z-A</option>
                  <option value="3">Date, new to old</option>
                  <option value="4">Date, old to new</option>
                  <option value="5">Price, high to low</option>
                  <option value="6">Price, low to high</option>
                </select>
              </div>
            </div>
            {productsList.length === 0 ? (
              <p>No Product Found</p>
            ) : (
              <ProductsBox products={productsList} itemsPerPage={12} />
            )}
          </div>
        </div>
      </div>
      <div className="slidebar-control-mobile">
        <button
          className="mobile-slidebar-item item--slidebar"
          onClick={showSlidebarHandler}
        >
          Menu
        </button>
        <select
          className="mobile-slidebar-item item--sort"
          onChange={changeSelectionHandler}
          value={sortProducts}
        >
          <option value="1">A To Z</option>
          <option value="2">Z To A</option>
          <option value="3">New To Old</option>
          <option value="4">Old To New</option>
          <option value="5">High To Low</option>
          <option value="6">Low To High</option>
        </select>
      </div>
    </div>
  );
}
export default ProductsPage;
const ProductsBox = (props) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    const endOffset = itemOffset + props.itemsPerPage;
    setCurrentItems(props.products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(props.products.length / props.itemsPerPage));
  }, [itemOffset, props.itemsPerPage, props.products]);
  const PageClickHandler = (event) => {
    const newOffset =
      (event.selected * props.itemsPerPage) % props.products.length;
    setItemOffset(newOffset);
  };
  return (
    <React.Fragment>
      <div className="row">
        {currentItems &&
          currentItems.map((product) => (
            <div
              key={product.id}
              className="product-item col-12 col-sm-6 col-md-4 col-xxl-3  g-2 g-sm-4"
            >
              <ProductCardItem data={product} />
            </div>
          ))}
      </div>
      <div className="products-pagination">
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >"
          onPageChange={PageClickHandler}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< "
          renderOnZeroPageCount={null}
        />
      </div>
    </React.Fragment>
  );
};
