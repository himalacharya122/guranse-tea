<template>
  <div>
    <Headers />
    <div class="min-h-screen bg-white">
      <!-- Tea Categories Section -->
      <section class="bg-white py-6 sm:py-8 lg:py-10">
        <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <!-- Desktop View (lg and above) -->
          <div class="hidden lg:flex flex-wrap justify-center items-center gap-8 xl:gap-10 2xl:gap-12">
            <div 
              v-for="category in teaCategories" 
              :key="category.id"
              class="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:transform hover:scale-105"
              @click="selectCategory(category.id)"
            >
              <div class="relative w-20 h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 rounded-full bg-guranse-png-background flex items-center justify-center mb-3 xl:mb-4 transition-all duration-300">
                <img 
                  :src="category.image" 
                  :alt="category.name"
                  class="w-14 h-14 xl:w-18 xl:h-18 2xl:w-20 2xl:h-20 object-cover rounded-full"
                />
              </div>
              <span class="font-metropolis text-xs xl:text-sm font-semibold text-guranse-text tracking-metropolis text-center duration-300 whitespace-nowrap px-1">
                {{ category.name }}
              </span>
            </div>
          </div>

          <!-- Mobile/Tablet View (below lg) -->
          <div class="lg:hidden">
            <!-- Scrollable Container -->
            <div 
              ref="scrollContainer"
              class="flex items-center sm:justify-center md:justify-center gap-6 sm:gap-8 md:gap-10 overflow-x-auto scrollbar-hide px-4 py-2"
              style="scroll-behavior: smooth; scrollbar-width: none; -ms-overflow-style: none;"
            >
              <div 
                v-for="category in teaCategories" 
                :key="category.id"
                class="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:transform hover:scale-105 flex-shrink-0"
                @click="selectCategory(category.id)"
              >
                <div class="relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-guranse-png-background flex items-center justify-center mb-2 sm:mb-3 transition-all duration-300 group-hover:shadow-lg">
                  <img 
                    :src="category.image" 
                    :alt="category.name"
                    class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover rounded-full"
                  />
                </div>
                <span class="font-metropolis text-[10px] sm:text-xs font-semibold text-guranse-text tracking-metropolis text-center group-hover:text-guranse-accent transition-colors duration-300 whitespace-nowrap px-1">
                  {{ category.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Hero Section - The Guranse Story -->
      <section class="bg-gray-100">
        <div class="w-full">
          <!-- Mobile Layout (stacked) -->
          <div class="lg:hidden">
            <!-- Image on top for mobile -->
            <div class="relative h-64 sm:h-80 md:h-96 w-full">
              <img 
                src="/images/home-hero.jpg" 
                alt="Women in traditional clothing working in tea fields" 
                class="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            <!-- Content below image for mobile -->
            <div class="px-4 sm:px-6 py-8 sm:py-12 text-center space-y-4 sm:space-y-6">
              <h1 class="font-recoleta text-[24px] sm:text-[28px] md:text-[32px] font-normal text-gray-800 max-w-[400px] mx-auto" style="line-height: 1.3;">
                The Finest Nepali Organic <br> Himalayan Brew
              </h1>
              <div class="pt-2 sm:pt-4">
                <Link href="/our-story">
                  <button class="font-metropolis bg-guranse-accent hover:bg-orange-600 text-white font-medium px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base transition-colors duration-200 tracking-metropolis">
                    LEARN MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <!-- Desktop Layout (side by side) -->
          <div class="hidden lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12 2xl:gap-16 items-center min-h-[450px] xl:min-h-[500px] 2xl:min-h-[550px]">
            <!-- Left Content -->
            <div class="space-y-6 xl:space-y-8 px-8 xl:px-12 2xl:px-16 text-center">
              <h1 class="font-recoleta text-[32px] lg:text-[40px] xl:text-[48px] font-normal text-guranse-text max-w-[500px] mx-auto" style="line-height: 1.3;">
                The Finest Nepali<br>Organic Himalayan<br>Brew
              </h1>
              <div class="pt-4">
                <Link href="/our-story">
                  <button class="font-metropolis bg-guranse-accent hover:bg-orange-600 text-white font-medium px-[68px] py-[14px] text-sm lg:text-sm transition-colors duration-200 tracking-metropolis">
                    LEARN MORE
                  </button>
                </Link>
              </div>
            </div>
            
            <!-- Right Image -->
            <div class="relative h-full min-h-[400px] xl:min-h-[450px] 2xl:min-h-[500px]">
              <img 
                src="/images/home-hero.jpg" 
                alt="Women in traditional clothing working in tea fields" 
                class="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Best Sellers Section - Updated to match mockup -->
      <section class="py-14 lg:py-16 bg-white">
        <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Header -->
          <div class="flex justify-between items-center mb-12">
            <h2 class="font-recoleta text-2xl lg:text-3xl xl:text-4xl font-normal text-gray-600">
              Best Sellers
            </h2>
            <button class="bg-green-700 hover:bg-green-800 text-white font-metropolis-spaced text-sm font-medium px-8 py-3 transition-all duration-300 tracking-wide">
              VIEW ALL
            </button>
          </div>
          
          <!-- Products Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div 
              v-for="product in bestSellers" 
              :key="product.id"
              class="group cursor-pointer"
            >
              <!-- Product Image -->
              <div class="bg-guranse-png-background aspect-aspect-[4/5] mb-6 overflow-hidden">
                <img 
                  :src="product.image" 
                  :alt="product.category"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <!-- Product Info -->
              <div class="space-y-3">
                <h3 class="font-metropolis text-sm font-semibold text-green-700 tracking-wide uppercase">
                  {{ product.category }}
                </h3>
                <p class="font-nunito text-sm text-gray-600 leading-relaxed">
                  {{ product.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Process Section - Updated to match mockup -->
      <section class="lg:py-8 bg-white">
        <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Process Card -->
          <div class="bg-white shadow-lg overflow-hidden">
            <div class="grid grid-cols-1 lg:grid-cols-2">
              <!-- Left Content -->
              <div class="bg-guranse-background px-8 sm:px-12 lg:px-16 py-12 lg:py-16 flex flex-col justify-center">
                <div class="space-y-6 lg:space-y-8">
                  <h2 class="font-recoleta text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal text-guranse-text leading-tight">
                    Properly prepared,<br>
                    it offers tea drinkers an<br>
                    <span class="text-guranse-primary">experience</span> akin to no other drink.
                  </h2>
                  <div class="pt-4">
                    <Link href="/process">
                      <button class="bg-guranse-accent hover:bg-orange-600 text-white font-metropolis-spaced text-sm font-medium px-8 py-3 transition-all duration-300 tracking-wide uppercase">
                        VIEW PROCESS
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              
              <!-- Right Image -->
              <div class="relative h-64 sm:h-80 lg:h-auto lg:min-h-[400px] xl:min-h-[500px]">
                <img 
                  src="/images/leaf.png" 
                  alt="Close-up of fresh tea leaves showing natural texture and veins" 
                  class="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Latest Posts Section - Full Screen Slider -->
      <section class="py-16 lg:py-20 bg-white">
        <!-- Header with container -->
        <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div class="flex justify-between items-center">
            <h2 class="font-recoleta text-2xl lg:text-3xl xl:text-4xl font-normal text-gray-600">
              Latest Posts
            </h2>
            <button class="bg-green-700 hover:bg-green-800 text-white font-metropolis text-sm font-medium px-8 py-3 transition-all duration-300 tracking-wide">
              VIEW ALL
            </button>
          </div>
        </div>

        <!-- Full Screen Slider -->
        <div class="relative">
          <!-- Slider Container - Full Screen -->
          <div 
            ref="postsSlider"
            class="flex gap-6 lg:gap-8 overflow-x-auto scrollbar-hide pb-4 pl-4 sm:pl-6 lg:pl-8 pr-2 sm:pr-4 lg:pr-3"
            style="scroll-behavior: smooth; scrollbar-width: none; -ms-overflow-style: none;"
          >
            <article 
              v-for="post in latestPosts" 
              :key="post.id"
              class="group cursor-pointer flex-shrink-0 w-72 lg:w-[450px]"
            >
              <!-- Post Image -->
              <div class="overflow-hidden mb-6 h-[350px] lg:h-[550px]">
                <img 
                  :src="post.image" 
                  :alt="post.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <!-- Post Content -->
              <div class="space-y-3">
                <h3 class="font-metropolis text-center text-sm lg:text-sm font-normal text-guranse-text group-hover:text-guranse-primary transition-colors duration-300 leading-tight tracking-wide">
                  {{ post.title }}
                </h3>
              </div>
            </article>
          </div>
          
          <!-- Navigation Buttons -->
          <!-- Desktop: Next button only -->
          <button 
            @click="slideNext"
            class="hidden lg:block absolute right-0 bg-black bg-opacity-50 hover:bg-opacity-60 text-white w-8 h-12 flex items-center justify-center transition-all duration-300 z-10"
            style="top: 300px;"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          <!-- Mobile: Both prev and next buttons -->
          <div class="lg:hidden">
            <!-- Previous Button -->
            <button 
              v-show="showLeftArrow"
              @click="slidePrev"
              class="absolute left-0 bg-black bg-opacity-30 hover:bg-opacity-50 text-white w-6 h-10 flex items-center justify-center transition-all duration-300 z-10"
              style="top: 200px;"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            
            <!-- Next Button -->
            <button 
              @click="slideNext"
              class="absolute right-0 bg-black bg-opacity-30 hover:bg-opacity-50 text-white w-6 h-10 flex items-center justify-center transition-all duration-300 z-10"
              style="top: 200px;"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <!-- Newsletter Subscription Section -->
      <section class="bg-guranse-background py-12 sm:py-16 lg:py-20">
        <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-center">
            <!-- Left Content -->
            <div>
              <h2 class="font-recoleta text-2xl sm:text-3xl lg:text-4xl font-normal text-guranse-text leading-tight text-center lg:text-left">
                Join Our Tea<br>
                Connoisseur Circle
              </h2>
            </div>
            
            <!-- Center Description -->
            <div class="text-center lg:text-left">
              <p class="font-nunito text-sm sm:text-base text-gray-600 leading-relaxed">
                Subscribe to our newsletter to get daily<br>
                tea updates from Guranse Tea.
              </p>
            </div>
            
            <!-- Right Form -->
            <div class="flex justify-center lg:justify-end">
              <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-3 max-w-full sm:max-w-2xl">
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  class="flex-1 px-3 py-3 sm:px-4 sm:py-4 border border-gray-300 focus:ring-guranse-primary focus:border-guranse-primary font-metropolis text-xs sm:text-sm placeholder:text-gray-400 tracking-wide bg-transparent"
                  v-model="email"
                  required
                />
                <button 
                  type="submit"
                  class="bg-guranse-accent hover:bg-orange-600 text-white font-metropolis text-xs sm:text-sm font-semibold px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 tracking-wide"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="py-12 sm:py-16 lg:py-20 bg-white">
        <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <!-- Contact Form -->
            <div>
              <h2 class="font-recoleta text-xl sm:text-2xl font-bold text-guranse-text mb-6">
                Get In Touch
              </h2>
              <form @submit.prevent="submitForm" class="space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="FIRST NAME"
                    class="px-3 py-2.5 border border-gray-300 focus:ring-guranse-primary focus:border-guranse-primary font-metropolis text-xs placeholder:text-xs tracking-metropolis"
                    v-model="form.firstName"
                    required
                  />
                  <input
                    type="text"
                    placeholder="LAST NAME"
                    class="px-3 py-2.5 border border-gray-300 focus:ring-guranse-primary focus:border-guranse-primary font-metropolis text-xs placeholder:text-xs tracking-metropolis"
                    v-model="form.lastName"
                    required
                  />
                </div>
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  class="w-full px-3 py-2.5 border border-gray-300 focus:ring-guranse-primary focus:border-guranse-primary font-metropolis text-xs placeholder:text-xs tracking-metropolis"
                  v-model="form.email"
                  required
                />
                <input
                  type="tel"
                  placeholder="PHONE"
                  class="w-full px-3 py-2.5 border border-gray-300 focus:ring-guranse-primary focus:border-guranse-primary font-metropolis text-xs placeholder:text-xs tracking-metropolis"
                  v-model="form.phone"
                />
                <textarea
                  placeholder="MESSAGE"
                  rows="4"
                  class="w-full px-3 py-2.5 border border-gray-300 focus:ring-guranse-primary focus:border-guranse-primary font-metropolis text-xs placeholder:text-xs tracking-metropolis resize-none"
                  v-model="form.message"
                  required
                ></textarea>
                <button
                  type="submit"
                  class="bg-guranse-primary hover:bg-green-700 text-white font-metropolis text-xs font-semibold px-6 py-2.5 transition-all duration-300 tracking-metropolis"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>

            <!-- Contact Info -->
            <div class="space-y-6">
              <div>
                <h3 class="font-recoleta text-lg font-bold text-guranse-text mb-3">Contact</h3>
                <div class="space-y-1 font-nunito text-sm text-guranse-text">
                  <p>Sano Mandir, Gaidakot,</p>
                  <p>Nawal Parasi(East), Nepal</p>
                  <p>House #58</p>
                  <p class="pt-2">+977-01-4422600, 4422940</p>
                  <p>reply@guransetea.com.np</p>
                </div>
              </div>
              <div>
                <h3 class="font-recoleta text-lg font-bold text-guranse-text mb-3">Social</h3>
                <div class="flex space-x-3">
                  <a href="#" class="text-guranse-text hover:text-guranse-accent transition-colors duration-300">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" class="text-guranse-text hover:text-guranse-accent transition-colors duration-300">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </a>
                  <a href="#" class="text-guranse-text hover:text-guranse-accent transition-colors duration-300">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-guranse-text text-white py-6">
        <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <p class="font-nunito text-xs">
              © 2025 Guranse Tea | Made with ❤️ by Minimal
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import Headers from '@/Components/Headers.vue'  
import { ref, onMounted } from 'vue'
import { Link } from '@inertiajs/vue3'

// Reactive data
const email = ref('')
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: ''
})

// Slider refs
const postsSlider = ref(null)
const showLeftArrow = ref(false)

// Tea categories data with images
const teaCategories = ref([
  {
    id: 'all',
    name: 'ALL TEAS',
    image: '/images/tea1.png'
  },
  {
    id: 'loose-leaf',
    name: 'LOOSE LEAF',
    image: '/images/tea2.png'
  },
  {
    id: 'black-tea',
    name: 'BLACK TEA',
    image: '/images/tea3.png'
  },
  {
    id: 'white-cresent',
    name: 'WHITE CRESCENT',
    image: '/images/tea4.png'
  },
  {
    id: 'green-tea',
    name: 'GREEN TEA',
    image: '/images/tea5.png'
  }
])

// Best sellers data
const bestSellers = ref([
  {
    id: 1,
    category: 'GREEN TEA',
    description: 'Experience the Guranse Green Tea first hand. Order Online.',
    image: '/images/tea4.png'
  },
  {
    id: 2,
    category: 'WHITE TEA',
    description: 'Experience the Guranse White Tea first hand. Order Online.',
    image: '/images/tea5.png'
  },
  {
    id: 3,
    category: 'BLACK TEA',
    description: 'Experience the Guranse Black Tea first hand. Order Online.',
    image: '/images/tea4.png'
  },
  {
    id: 4,
    category: 'PINK TEA',
    description: 'Experience the Guranse Pink Tea first hand. Order Online.',
    image: '/images/tea7.png'
  }
])

// Latest posts data - updated with better images
const latestPosts = ref([
  {
    id: 1,
    title: 'Why Organic Tea is the Healthier and Tastier Choice',
    image: '/images/post1.png'
  },
  {
    id: 2,
    title: 'The Journey of Guranse Tea: From Nepal\'s Highlands to Your Cup',
    image: '/images/post2.png'
  },
  {
    id: 3,
    title: '5 Incredible Health Benefits of Drinking Organic Green Tea',
    image: '/images/post3.png'
  },
  {
    id: 4,
    title: 'The Art of Tea Brewing: Traditional Methods vs Modern Techniques',
    image: '/images/post1.png'
  },
  {
    id: 5,
    title: 'Sustainable Tea Farming: Our Commitment to the Environment',
    image: '/images/post2.png'
  }
])

// Methods
const selectCategory = (categoryId) => {
  console.log('Selected category:', categoryId)
}

const subscribeNewsletter = () => {
  console.log('Newsletter subscription:', email.value)
}

const submitForm = () => {
  console.log('Form submitted:', form.value)
}

// Slider methods
const slideNext = () => {
  if (postsSlider.value) {
    const scrollAmount = 470 // Width of one card plus gap (450 + 20)
    postsSlider.value.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    showLeftArrow.value = true
  }
}

const slidePrev = () => {
  if (postsSlider.value) {
    const scrollAmount = 470 // Width of one card plus gap
    postsSlider.value.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    
    // Hide left arrow if at the beginning
    setTimeout(() => {
      if (postsSlider.value.scrollLeft <= 10) {
        showLeftArrow.value = false
      }
    }, 300)
  }
}

// Monitor scroll position
onMounted(() => {
  if (postsSlider.value) {
    postsSlider.value.addEventListener('scroll', () => {
      showLeftArrow.value = postsSlider.value.scrollLeft > 10
    })
  }
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Hide scrollbar completely */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Custom responsive sizes */
@media (min-width: 768px) {
  .w-18 { width: 4.5rem; }
  .h-18 { height: 4.5rem; }
}

@media (min-width: 1536px) {
  .w-22 { width: 5.5rem; }
  .h-22 { height: 5.5rem; }
}
</style>
