import React, { useState } from "react";
import "./App.css"

const Searchbar = ({ value, onChange }) => (
  <div className="search-section">
    <input
      type="search"
      className="search-box"
      placeholder="Start typing a name..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export const ProductList = ({ searchQuary }) => {
  const list = [
    "Aarav","Vivaan","Aditya","Vihaan","Arjun","Reyansh","Muhammad","Sai","Arnav","Ayaan",
    "Krishna","Ishaan","Shaurya","Atharv","Dhruv","Kabir","Rudra","Aryan","Vedant","Yash",
    "Rohan","Karan","Rahul","Amit","Raj","Vikram","Suresh","Manish","Ankit","Deepak",
    "Neha","Aanya","Diya","Saanvi","Aadhya","Kavya","Pari","Ananya","Riya","Myra",
    "Ishita","Navya","Meera","Siya","Prisha","Khushi","Pooja","Sneha","Nisha","Tanya",
    "John","Michael","David","James","Robert","Daniel","William","Joseph","Thomas","Charles",
    "Christopher","Matthew","Anthony","Mark","Donald","Steven","Paul","Andrew","Joshua","Kenneth",
    "Kevin","Brian","George","Edward","Ronald","Timothy","Jason","Jeffrey","Ryan","Jacob",
    "Gary","Nicholas","Eric","Jonathan","Stephen","Larry","Justin","Scott","Brandon","Benjamin",
    "Samuel","Gregory","Frank","Alexander","Raymond","Patrick","Jack","Dennis","Jerry","Tyler",
    "Aaron","Jose","Adam","Nathan","Henry","Douglas","Zachary","Peter","Kyle","Walter",
    "Ethan","Jeremy","Harold","Keith","Christian","Roger","Noah","Gerald","Carl","Terry",
    "Sean","Austin","Arthur","Lawrence","Jesse","Dylan","Bryan","Joe","Jordan","Billy",
    "Bruce","Albert","Willie","Gabriel","Logan","Alan","Juan","Wayne","Roy","Ralph",
    "Eugene","Randy","Vincent","Russell","Louis","Philip","Bobby","Johnny","Bradley","Mary",
    "Patricia","Jennifer","Linda","Elizabeth","Barbara","Susan","Jessica","Sarah","Karen","Nancy",
    "Lisa","Betty","Margaret","Sandra","Ashley","Kimberly","Emily","Donna","Michelle","Dorothy",
    "Carol","Amanda","Melissa","Deborah","Stephanie","Rebecca","Sharon","Laura","Cynthia","Kathleen",
    "Amy","Shirley","Angela","Helen","Anna","Brenda","Pamela","Nicole","Emma","Samantha",
    "Katherine","Christine","Debra","Rachel","Catherine","Carolyn","Janet","Ruth","Maria","Heather",
    "Diane","Virginia","Julie","Joyce","Victoria","Olivia","Kelly","Christina","Lauren","Joan",
    "Evelyn","Judith","Megan","Cheryl","Andrea","Hannah","Martha","Jacqueline","Frances","Gloria",
    "Ann","Teresa","Kathryn","Sara","Janice","Jean","Alice","Madison","Doris","Abigail",
    "Julia","Judy","Grace","Denise","Amber","Marilyn","Danielle","Beverly","Isabella","Theresa",
    "Sophia","Charlotte","Amelia","Mia","Harper","Evelyn","Ella","Avery","Scarlett","Aria"
  ];

  const filterList = list.filter((item) =>
    item.toLowerCase().includes(searchQuary.toLowerCase())
  );

  return (
    <div className="name-grid">
      {filterList.length > 0 ? (
        filterList.map((item, index) => (
          <div key={index} className="name-card">
            {item}
          </div>
        ))
      ) : (
        <div className="no-match">No results found for "{searchQuary}"</div>
      )}
    </div>
  );
};

const App = () => {
  const [searchQuary, setSearchQuary] = useState("");

  return (
    <div className="app-container">
      <div className="header-content">
        <h1>Serach Bar</h1>
      </div>
      <Searchbar value={searchQuary} onChange={setSearchQuary} />
      <ProductList searchQuary={searchQuary} />
    </div>
  );
};

export default App;