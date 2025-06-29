<template>
  <!-- Subscription Banner -->
  <div class="bg-[#065841] text-white text-center py-2 sm:py-3 px-2 sm:px-4 relative mb-2 sm:mb-3 z-60">
    <p class="text-xs sm:text-sm font-medium tracking-wide">SAVE HUGE ON THE GURANSE TEA SUBSCRIPTIONS</p>
    <button class="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200">
      <X :size="14" class="sm:hidden" />
      <X :size="16" class="hidden sm:block" />
    </button>
  </div>

  <!-- Dark Overlay - dynamically positioned -->
  <div 
    v-if="activeDropdown" 
    class="fixed inset-0 bg-black bg-opacity-20 z-10 transition-opacity duration-300"
    :style="{ top: $refs.header ? $refs.header.offsetHeight + 'px' : '120px' }"
  ></div>

  <!-- Main Header -->
  <header ref="header" class="bg-white sticky top-0 z-50" style="box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05)">
    <div class="max-w-[1600px] mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
      
      <!-- Mobile Header Row (up to 991px) -->
      <div class="max-[991px]:flex hidden items-center justify-between h-16 xs:h-18 sm:h-20">
        <!-- Mobile Menu Button -->
        <button class="p-1 xs:p-2 text-[#065841]" @click="isMenuOpen = !isMenuOpen">
          <Menu :size="20" class="min-[475px]:hidden" />
          <Menu :size="22" class="hidden min-[475px]:block sm:hidden" />
          <Menu :size="24" class="hidden sm:block" />
        </button>

        <!-- Mobile Logo -->
        <div class="flex-shrink-0 flex items-center">
          <Link href="/">
            <img 
              src="/logo.svg" 
              alt="Guranse Logo" 
              class="w-10 h-10 min-[475px]:w-12 min-[475px]:h-16 sm:w-16 sm:h-14 md:w-16 md:h-16" 
            />
          </Link>
        </div>

        <!-- Mobile Right Side Icons -->
        <div class="flex items-center space-x-1 min-[475px]:space-x-2 sm:space-x-3">
          <button class="p-1 min-[475px]:p-2 hidden min-[475px]:block">
            <MapPin :size="18" class="min-[475px]:block sm:hidden text-[#065841]" />
            <MapPin :size="20" class="hidden sm:block text-[#065841]" />
          </button>
          <button class="p-1 min-[475px]:p-2 hidden min-[475px]:block">
            <User :size="18" class="min-[475px]:block sm:hidden text-[#065841]" />
            <User :size="20" class="hidden sm:block text-[#065841]" />
          </button>
          <button class="p-1 min-[475px]:p-2 relative">
            <ShoppingCart :size="16" class="min-[475px]:hidden text-[#065841]" />
            <ShoppingCart :size="18" class="hidden min-[475px]:block sm:hidden text-[#065841]" />
            <ShoppingCart :size="20" class="hidden sm:block text-[#065841]" />
            <span class="absolute -top-0.5 -right-0.5 min-[475px]:-top-1 min-[475px]:-right-1 bg-[#D97706] text-white text-xs rounded-full w-4 h-4 min-[475px]:w-5 min-[475px]:h-5 flex items-center justify-center font-medium text-[10px] min-[475px]:text-xs">
              0
            </span>
          </button>
        </div>
      </div>

      <!-- Mobile Search Bar -->
      <div class="max-[991px]:block hidden py-2 min-[475px]:py-3 sm:py-4 border-t border-gray-100">
        <div class="relative">
          <input
            type="text"
            placeholder="Search the site"
            class="w-full pl-8 min-[475px]:pl-10 sm:pl-12 pr-3 min-[475px]:pr-4 py-2 min-[475px]:py-2.5 sm:py-3 border border-gray-600 rounded-none focus:ring-[#065841] focus:border-[#065841] text-gray-600 bg-transparent text-sm min-[475px]:text-base placeholder:text-xs min-[475px]:placeholder:text-sm"
          />
          <Search :size="16" class="absolute left-2 min-[475px]:left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 min-[475px]:hidden" />
          <Search :size="18" class="absolute left-2 min-[475px]:left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hidden min-[475px]:block sm:hidden" />
          <Search :size="20" class="absolute left-2 min-[475px]:left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hidden sm:block" />
        </div>
      </div>

      <!-- Desktop Header Row (992px and above) -->
      <div class="hidden min-[992px]:flex items-center justify-between h-20 relative">
        <div class="flex-1"></div>

        <div class="flex-1 flex justify-center">
          <div class="flex items-center w-full max-w-4xl">
            <div class="relative w-full">
              <input
                type="text"
                placeholder="Search the site"
                class="w-full pl-12 pr-4 py-2 border border-gray-600 rounded-none focus:ring-[#065841] focus:border-[#065841] text-gray-600 bg-transparent placeholder:text-sm"
              />
              <Search :size="16" class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>

        <div class="flex items-center space-x-6 flex-1 justify-end">
          <button class="flex items-center text-[#065841] hover:text-[#D97706] transition-colors">
            <MapPin :size="18" class="mr-1" />
            <span class="text-sm font-medium">STORES</span>
          </button>
          <button class="flex items-center text-[#065841] hover:text-[#D97706] transition-colors">
            <User :size="18" class="mr-1" />
            <span class="text-sm font-medium">SIGN IN</span>
          </button>
          <button class="flex items-center text-[#065841] hover:text-[#D97706] transition-colors relative">
            <ShoppingCart :size="20" />
            <span class="ml-1 bg-[#D97706] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
              0
            </span>
          </button>
        </div>

        <!-- Large Desktop Logo -->
        <div class="absolute left-8 top-[70%] transform -translate-y-1/2 z-10">
          <Link href="/">
            <img src="/logo.svg" alt="Guranse Logo" class="w-24 h-24" />
          </Link>
        </div>
      </div>

      <!-- Desktop Bottom Row with Navigation -->
      <div class="hidden min-[992px]:flex items-center justify-center h-10">
        <nav class="flex items-center space-x-2 h-full">
          <!-- Our Story Dropdown -->
          <div 
            class="relative group h-full"
            @mouseenter="activeDropdown = 'ourStory'"
            @mouseleave="activeDropdown = null"
          >
            <Link 
              href="/our-story"
              class="flex items-center text-gray-600 hover:text-[#D97706] font-medium transition-colors tracking-wide text-sm h-full px-4 py-2"
              :class="{ 'text-[#D97706]': activeDropdown === 'ourStory' }"
            >
              OUR STORY
              <Plus :size="16" class="ml-2 transition-transform" :class="{ 'rotate-45': activeDropdown === 'ourStory' }" />
            </Link>
            <div 
              v-if="activeDropdown === 'ourStory'"
              class="absolute top-full left-1/2 transform -translate-x-1/2 w-96 bg-white shadow-2xl z-20 overflow-hidden"
            >
              <div class="p-6" style="box-shadow: inset 0 4px 6px -1px rgb(0 0 0 / 0.05)">
                <h3 class="text-lg font-semibold text-[#065841] mb-6 text-center tracking-wide">OUR STORY</h3>
                <div class="space-y-4">
                  <Link href="/our-story/csr" class="group/item flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div class="flex-1">
                      <div class="text-gray-700 group-hover/item:text-[#D97706] font-medium mb-1 transition-colors">CSR</div>
                      <div class="text-sm text-gray-500 group-hover/item:text-gray-600 transition-colors">Corporate Social Responsibility initiatives</div>
                    </div>
                  </Link>
                  <Link href="/our-story/recognition" class="group/item flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div class="flex-1">
                      <div class="text-gray-700 group-hover/item:text-[#D97706] font-medium mb-1 transition-colors">Recognition</div>
                      <div class="text-sm text-gray-500 group-hover/item:text-gray-600 transition-colors">Awards and achievements</div>
                    </div>
                  </Link>
                  <Link href="/our-story/gallery" class="group/item flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div class="flex-1">
                      <div class="text-gray-700 group-hover/item:text-[#D97706] font-medium mb-1 transition-colors">Gallery</div>
                      <div class="text-sm text-gray-500 group-hover/item:text-gray-600 transition-colors">Visual journey of our heritage</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <!-- Terroir Dropdown -->
          <div 
            class="relative group h-full"
            @mouseenter="activeDropdown = 'terroir'"
            @mouseleave="activeDropdown = null"
          >
            <Link 
              href="/terroir"
              class="flex items-center text-gray-600 hover:text-[#D97706] font-medium transition-colors tracking-wide text-sm h-full px-4 py-2"
              :class="{ 'text-[#D97706]': activeDropdown === 'terroir' }"
            >
              TERROIR
              <Plus :size="16" class="ml-2 transition-transform" :class="{ 'rotate-45': activeDropdown === 'terroir' }" />
            </Link>
            <div 
              v-if="activeDropdown === 'terroir'"
              class="absolute top-full left-1/2 transform -translate-x-1/2 w-96 bg-white shadow-2xl border border-gray-100 z-20 overflow-hidden"
            >
              <div class="p-6" style="box-shadow: inset 0 4px 6px -1px rgb(0 0 0 / 0.05)">
                <h3 class="text-lg font-semibold text-[#065841] mb-6 text-center tracking-wide">TERROIR</h3>
                <div class="space-y-4">
                  <Link href="/terroir/flavours" class="group/item flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div class="flex-1">
                      <div class="text-gray-700 group-hover/item:text-[#D97706] font-medium mb-1 transition-colors">Flavours</div>
                      <div class="text-sm text-gray-500 group-hover/item:text-gray-600 transition-colors">Unique taste profiles from our gardens</div>
                    </div>
                  </Link>
                  <Link href="/terroir/process" class="group/item flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div class="flex-1">
                      <div class="text-gray-700 group-hover/item:text-[#D97706] font-medium mb-1 transition-colors">Process</div>
                      <div class="text-sm text-gray-500 group-hover/item:text-gray-600 transition-colors">Traditional cultivation methods</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <!-- Shop Dropdown -->
          <div 
            class="relative group h-full"
            @mouseenter="activeDropdown = 'shop'"
            @mouseleave="activeDropdown = null"
          >
            <Link 
              href="/shop"
              class="flex items-center text-gray-600 hover:text-[#D97706] font-medium transition-colors tracking-wide text-sm h-full px-4 py-2"
              :class="{ 'text-[#D97706]': activeDropdown === 'shop' }"
            >
              SHOP
              <Plus :size="16" class="ml-2 transition-transform" :class="{ 'rotate-45': activeDropdown === 'shop' }" />
            </Link>
            <div 
              v-if="activeDropdown === 'shop'"
              class="absolute top-full left-1/2 transform -translate-x-1/2 w-96 bg-white shadow-2xl border border-gray-100 z-20 overflow-hidden"
            >
              <div class="p-6" style="box-shadow: inset 0 4px 6px -1px rgb(0 0 0 / 0.05)">
                <h3 class="text-lg font-semibold text-[#065841] mb-6 text-center tracking-wide">SHOP</h3>
                <div class="space-y-4">
                  <Link href="/shop/teaware" class="group/item flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div class="flex-1">
                      <div class="text-gray-700 group-hover/item:text-[#D97706] font-medium mb-1 transition-colors">Teaware</div>
                      <div class="text-sm text-gray-500 group-hover/item:text-gray-600 transition-colors">Premium tea accessories and tools</div>
                    </div>
                  </Link>
                  <Link href="/shop/pure-loose-leaf" class="group/item flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div class="flex-1">
                      <div class="text-gray-700 group-hover/item:text-[#D97706] font-medium mb-1 transition-colors">Pure Loose Leaf</div>
                      <div class="text-sm text-gray-500 group-hover/item:text-gray-600 transition-colors">Finest quality loose leaf teas</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <!-- Single Menu Items -->
          <Link href="/faqs" class="text-gray-600 hover:text-[#D97706] font-medium transition-colors tracking-wide text-sm h-full px-4 py-2 flex items-center">
            FAQS
          </Link>
          <Link href="/wholesale" class="text-gray-600 hover:text-[#D97706] font-medium transition-colors tracking-wide text-sm h-full px-4 py-2 flex items-center">
            WHOLESALE
          </Link>
          <Link href="/blogs" class="text-gray-600 hover:text-[#D97706] font-medium transition-colors tracking-wide text-sm h-full px-4 py-2 flex items-center">
            BLOGS
          </Link>
        </nav>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="max-[991px]:block hidden bg-white border-t border-gray-200 shadow-lg">
      <nav class="px-2 min-[475px]:px-3 sm:px-4 py-3 min-[475px]:py-4 sm:py-6 space-y-2 min-[475px]:space-y-3 sm:space-y-4">
        <!-- Our Story Mobile -->
        <div class="space-y-1 min-[475px]:space-y-2">
          <button 
            class="flex items-center justify-between w-full text-[#065841] font-medium py-1.5 min-[475px]:py-2 tracking-wide border-b border-gray-100 text-sm min-[475px]:text-base"
            @click="toggleMobileDropdown('ourStory')"
          >
            OUR STORY
            <Plus :size="14" class="min-[475px]:hidden" />
            <Plus :size="16" class="hidden min-[475px]:block" />
          </button>
          <div v-if="activeMobileDropdown === 'ourStory'" class="space-y-0.5 min-[475px]:space-y-1">
            <Link href="/our-story/csr" class="block text-gray-600 hover:text-[#D97706] py-1.5 min-[475px]:py-2 pl-3 min-[475px]:pl-4 text-xs min-[475px]:text-sm">
              CSR
            </Link>
            <Link href="/our-story/recognition" class="block text-gray-600 hover:text-[#D97706] py-1.5 min-[475px]:py-2 pl-3 min-[475px]:pl-4 text-xs min-[475px]:text-sm">
              Recognition
            </Link>
            <Link href="/our-story/gallery" class="block text-gray-600 hover:text-[#D97706] py-1.5 min-[475px]:py-2 pl-3 min-[475px]:pl-4 text-xs min-[475px]:text-sm">
              Gallery
            </Link>
          </div>
        </div>

        <!-- Terroir Mobile -->
        <div class="space-y-1 min-[475px]:space-y-2">
          <button 
            class="flex items-center justify-between w-full text-[#065841] font-medium py-1.5 min-[475px]:py-2 tracking-wide border-b border-gray-100 text-sm min-[475px]:text-base"
            @click="toggleMobileDropdown('terroir')"
          >
            TERROIR
            <Plus :size="14" class="min-[475px]:hidden" />
            <Plus :size="16" class="hidden min-[475px]:block" />
          </button>
          <div v-if="activeMobileDropdown === 'terroir'" class="space-y-0.5 min-[475px]:space-y-1">
            <Link href="/terroir/flavours" class="block text-gray-600 hover:text-[#D97706] py-1.5 min-[475px]:py-2 pl-3 min-[475px]:pl-4 text-xs min-[475px]:text-sm">
              Flavours
            </Link>
            <Link href="/terroir/process" class="block text-gray-600 hover:text-[#D97706] py-1.5 min-[475px]:py-2 pl-3 min-[475px]:pl-4 text-xs min-[475px]:text-sm">
              Process
            </Link>
          </div>
        </div>

        <!-- Shop Mobile -->
        <div class="space-y-1 min-[475px]:space-y-2">
          <button 
            class="flex items-center justify-between w-full text-[#065841] font-medium py-1.5 min-[475px]:py-2 tracking-wide border-b border-gray-100 text-sm min-[475px]:text-base"
            @click="toggleMobileDropdown('shop')"
          >
            SHOP
            <Plus :size="14" class="min-[475px]:hidden" />
            <Plus :size="16" class="hidden min-[475px]:block" />
          </button>
          <div v-if="activeMobileDropdown === 'shop'" class="space-y-0.5 min-[475px]:space-y-1">
            <Link href="/shop/teaware" class="block text-gray-600 hover:text-[#D97706] py-1.5 min-[475px]:py-2 pl-3 min-[475px]:pl-4 text-xs min-[475px]:text-sm">
              Teaware
            </Link>
            <Link href="/shop/pure-loose-leaf" class="block text-gray-600 hover:text-[#D97706] py-1.5 min-[475px]:py-2 pl-3 min-[475px]:pl-4 text-xs min-[475px]:text-sm">
              Pure Loose Leaf
            </Link>
          </div>
        </div>

        <!-- Single Items Mobile -->
        <Link href="/faqs" class="block text-[#065841] hover:text-[#D97706] font-medium py-2 min-[475px]:py-3 tracking-wide border-b border-gray-100 text-sm min-[475px]:text-base">
          FAQS
        </Link>
        <Link href="/wholesale" class="block text-[#065841] hover:text-[#D97706] font-medium py-2 min-[475px]:py-3 tracking-wide border-b border-gray-100 text-sm min-[475px]:text-base">
          WHOLESALE
        </Link>
        <Link href="/blogs" class="block text-[#065841] hover:text-[#D97706] font-medium py-2 min-[475px]:py-3 tracking-wide border-b border-gray-100 text-sm min-[475px]:text-base">
          BLOGS
        </Link>

        <div class="pt-2 min-[475px]:pt-3 sm:pt-4 border-t border-gray-200 space-y-2 min-[475px]:space-y-3">
          <Link href="/stores" class="flex items-center text-[#065841] hover:text-[#D97706] py-1.5 min-[475px]:py-2">
            <MapPin :size="14" class="mr-1.5 min-[475px]:mr-2 min-[475px]:hidden" />
            <MapPin :size="16" class="mr-1.5 min-[475px]:mr-2 hidden min-[475px]:block" />
            <span class="text-xs min-[475px]:text-sm font-medium">STORES</span>
          </Link>
          <Link href="/signin" class="flex items-center text-[#065841] hover:text-[#D97706] py-1.5 min-[475px]:py-2">
            <User :size="14" class="mr-1.5 min-[475px]:mr-2 min-[475px]:hidden" />
            <User :size="16" class="mr-1.5 min-[475px]:mr-2 hidden min-[475px]:block" />
            <span class="text-xs min-[475px]:text-sm font-medium">SIGN IN</span>
          </Link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Search, MapPin, User, ShoppingCart, Menu, X, Plus } from 'lucide-vue-next'
import { Link } from '@inertiajs/vue3'

const isMenuOpen = ref(false)
const activeDropdown = ref(null)
const activeMobileDropdown = ref(null)

const toggleMobileDropdown = (dropdown) => {
  activeMobileDropdown.value = activeMobileDropdown.value === dropdown ? null : dropdown
}
</script>
