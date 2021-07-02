const search = document.getElementById("search-meal"); // 검색어
const searchBtn = document.getElementById("search-btn");
const randomSearchBtn = document.getElementById("random-search-btn");
const resultHead = document.getElementById("result-head");
const resultMeals = document.getElementById("result-meals");
const resultName = document.querySelector(".result-name");
const resultImg = document.getElementById("result-img");
const resultMealDetail = document.getElementById("result-meal-detail");

//Find Meal by keyword
function searchMeal(event) {
    event.preventDefault();

    search.innerHTML = '';

    let keyword = search.value;

    if (keyword.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);

                resultHead.innerHTML = `Search results for '${keyword}' :`;

                if (data.meals === null) {
                    resultHead.innerHTML = `There are no search results. Try again!`;
                } else {
                    resultMeals.innerHTML = data.meals.map(
                        meal => `<div class="meal">
                                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="100%"/>
                                    <div class="result-name" data-mealId=${meal.idMeal}><p>${meal.strMeal}</p></div>
                                </div>`
                    ).join('');
                }
                search.value = '';
            });
    }
}

//Find meal by Id
function findMealById(mealId) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then((response) => response.json())
        .then((data) => {
            showMealDetail(data.meals[0]);
        });
}

//Show meal detail information
function showMealDetail(data) {
    console.log(data);

    //Get ingredients
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        if (data[`strIngredient${i}`]) {
            ingredients.push(`${data[`strIngredient${i}`]} - ${data[`strMeasure${i}`]}`);
        } else {
            break;
        }
    }

    resultHead.innerHTML = '';
    resultMeals.innerHTML = `<div class="meal-detail">
                        <h2>${data.strMeal}</h2>
                        <img src="${data.strMealThumb}" alt="${data.strMeal}" width="40%"/>
                        <div class="detail-area-category" data-mealId=${data.idMeal}>
                            ${data.strCategory ? `<p>${data.strCategory}</p>` : ''}
                            ${data.strArea ? `<p>${data.strArea}</p>` : ''}
                        </div>
                        <div class="detail-main" data-mealId=${data.idMeal}>
                            <p>${data.strInstructions}</p>
                            <h3>Ingredients</h3>
                            <ul>
                                ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
                            </ul>
                        </div>
                    </div>`;
}


//eventListener
searchBtn.addEventListener("click", searchMeal);


resultMeals.addEventListener("click", event => {
    const mealInfo = event.path.find(item => {
        if (item.classList) {
            return item.classList.contains('result-name');
        } else {
            return false;
        }
    });

    if (mealInfo) {
        const mealId = mealInfo.getAttribute('data-mealId');
        findMealById(mealId);
    }
});