const meals = [
  { name: 'Patlıcan Kebabı', tags: ['Etli Yemek', 'Sebzeli', 'Geleneksel'] },
  { name: 'Havuç ekşileme, Acem pilavı', tags: ['Hafif', 'Ekşili', 'Pirinç'] },
  { name: 'Kısır, Ekşili turşu', tags: ['Vejetaryen', 'Soğuk Meze', 'Sağlıklı'] },
  { name: 'Sebzeli bulgur, Cacık', tags: ['Hafif', 'Sağlıklı', 'Protein'] },
  { name: 'Et Haşlama, Bulgur Pilavı', tags: ['Etli Yemek', 'Doyurucu', 'Protein'] },
  { name: 'Domates soslu köfte', tags: ['Etli Yemek', 'Baharatlı', 'Protein'] },
  { name: 'Arpa şehriye çorbası', tags: ['Çorba', 'Hafif', 'Sıcak'] },
  { name: 'Et Sote', tags: ['Etli Yemek', 'Hızlı', 'Protein'] },
  { name: 'Kıymalı Patates Sulusu, Pilav', tags: ['Etli Yemek', 'Doyurucu', 'Sıcak'] },
  { name: 'Mantı', tags: ['Geleneksel', 'Lezzet', 'Protein'] },
  { name: 'Kuzuların sessizliği, İnce salata', tags: ['Etli Yemek', 'Hafif', 'Protein'] },
  { name: 'Makarna, Salata', tags: ['Kolay', 'Hızlı', 'Akşam Yemeği'] },
  { name: 'Kabak kavurma', tags: ['Vejetaryen', 'Hafif', 'Sebzeli'] },
  { name: 'Ekşili makarna', tags: ['Kolay', 'Hızlı', 'Ekşili'] },
  { name: 'Taze fasulye, pilav', tags: ['Hafif', 'Sebzeli', 'Sağlıklı'] },
  { name: 'Fırında sebzeli köfte', tags: ['Etli Yemek', 'Fırında', 'Protein'] },
  { name: 'Spaghetti, Salata', tags: ['İtalyan', 'Kolay', 'Akşam Yemeği'] },
  { name: 'Zeytinyağlı Biber Dolması, Yoğurt', tags: ['Vejetaryen', 'Hafif', 'Sağlıklı'] },
  { name: 'Paça, Bulgur Pilavı', tags: ['Geleneksel', 'Doyurucu', 'Protein'] },
  { name: 'Kızartma', tags: ['Lezzetli', 'Pratik', 'Hızlı'] },
  {
    name: 'Sebzeli Kıymalı Makarna, Salata',
    tags: ['Etli Yemek', 'Protein', 'Akşam Yemeği'],
  },
  { name: 'Ciğerimin köşesi', tags: ['Etli Yemek', 'Özel Lezzet', 'Protein'] },
  { name: 'Mercimek Köftesi, Salata', tags: ['Vejetaryen', 'Hafif', 'Sağlıklı'] },
  { name: 'Tavuk sote', tags: ['Hafif', 'Protein', 'Hızlı'] },
  { name: 'Etli nohut - Pirinç pilavı', tags: ['Etli Yemek', 'Doyurucu', 'Protein'] },
  { name: 'Pırasa, Bulgur Pilavı', tags: ['Sebzeli', 'Hafif', 'Sağlıklı'] },
  { name: 'Fırında Sebzeli Tavuk', tags: ['Hafif', 'Protein', 'Sağlıklı'] },
  { name: 'Kıymalı patates', tags: ['Etli Yemek', 'Doyurucu', 'Kolay'] },
  { name: 'Maraş tava', tags: ['Etli Yemek', 'Baharatlı', 'Protein'] },
  { name: 'Karnı yarık', tags: ['Etli Yemek', 'Geleneksel', 'Sebzeli'] },
  { name: 'Yoğurtlu patlıcanlı musakka', tags: ['Etli Yemek', 'Fırında', 'Geleneksel'] },
  { name: 'Tepsi kebabı', tags: ['Etli Yemek', 'Geleneksel', 'Protein'] },
]

const mealNameElement = document.getElementById('meal-name')
const tagsElement = document.getElementById('tags')
const allTagsContainer = document.getElementById('all-tags-container')
const changeMealButton = document.getElementById('change-meal')

// Tüm benzersiz etiketleri toplama
const allUniqueTags = [...new Set(meals.flatMap((meal) => meal.tags))]

const tagColors = [
  '#FF6B6B',
  '#4ECDC4',
  '#45B7D1',
  '#FDCB6E',
  '#6C5CE7',
  '#FF8A5B',
  '#2ECC71',
  '#3498DB',
  '#9B59B6',
]

function findMealsByTag(tag) {
  return meals.filter((meal) => meal.tags.includes(tag))
}

function generateRandomMealByTag(tag) {
  const mealsWithTag = findMealsByTag(tag)
  const randomIndex = Math.floor(Math.random() * mealsWithTag.length)
  return mealsWithTag[randomIndex]
}

function displayMeal(meal) {
  mealNameElement.textContent = meal.name

  // Temizle ve yeni etiketleri ekle
  tagsElement.innerHTML = ''
  meal.tags.forEach((tag, index) => {
    const tagElement = document.createElement('div')
    tagElement.textContent = tag
    tagElement.classList.add('tag')
    tagElement.style.backgroundColor = tagColors[index % tagColors.length]
    tagElement.addEventListener('click', () => {
      const newMeal = generateRandomMealByTag(tag)
      displayMeal(newMeal)
    })
    tagsElement.appendChild(tagElement)
  })
}

function generateRandomMeal() {
  const randomIndex = Math.floor(Math.random() * meals.length)
  displayMeal(meals[randomIndex])
}

// Tüm etiketleri alt kısımda görüntüleme
allUniqueTags.forEach((tag, index) => {
  const tagElement = document.createElement('div')
  tagElement.textContent = tag
  tagElement.classList.add('all-tag')
  tagElement.style.backgroundColor = tagColors[index % tagColors.length]
  tagElement.addEventListener('click', () => {
    const newMeal = generateRandomMealByTag(tag)
    displayMeal(newMeal)
  })
  allTagsContainer.appendChild(tagElement)
})

// İlk açılışta rastgele yemek göster
generateRandomMeal()

// Butona tıklandığında yeni bir yemek getir
changeMealButton.addEventListener('click', generateRandomMeal)
