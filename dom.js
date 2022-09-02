const loadMeal = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeal(data.meals))
}

const displayMeal = meals => {
    const container = document.getElementById('meal-container');
    container.innerHTML = ``
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="">
        <div class="card-body">
          <h4 class="card-title">${meal.strMeal}</h4>
          <p class="card-text">Food Category : ${meal.strCategory}</p>
          <p class="card-text">Poplur Area : ${meal.strArea}</p>
          <p class="card-text">How To Make : ${meal.strInstructions.slice(0,200)}</p>
          <button class="btn btn-primary"> Order Now >></button>
        </div>
        `
        container.appendChild(div)
    });
}

const searchFood = () =>{
    const yourMeal = document.getElementById('search-fild');
    const searchFood = yourMeal.value;
    loadMeal(searchFood)
    yourMeal.value = ''
    
}

loadMeal()