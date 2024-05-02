// object destructuring
// const band = {
//     bandName: "led zepplin",
//     famousSong: "stairway to heaven",
//     year: 1968,
//     anotherFamousSong: "kashmir",
//   };
  
//   let { bandName, famousSong, ...restProps } = band;
//   console.log(bandName);
//   console.log(restProps);


//my code
const band = {
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong: "kashmir",
  };

  const {bandName:var1,famousSong:var2,...restprop}= band;//(...restprop) means all the remaining prop will be stored in restprop as object type
//   console.log(bandName,famousSong);
  console.log(var1,var2,restprop,typeof restprop);
