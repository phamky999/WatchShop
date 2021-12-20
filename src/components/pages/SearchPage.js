import React from 'react'


import "./SearchPage.css"
export default function SearchPage() {
    return (
        <div className="search-page">
        <div className="container-xl">
            <h3>Search For Products On Our Site</h3>
            <form>
                <input type="text" placeholder="Search our products" />
                <button>
                    Search
                </button>
            </form>
        </div>
        </div>
    )
}
