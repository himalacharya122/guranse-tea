<template>
  <!-- Subscription Banner -->
  <div class="bg-guranse-primary text-white text-center py-3 relative z-60">
    <p class="font-metropolis-spaced text-xs sm:text-xs font-medium">SAVE HUGE ON THE GURANSE TEA SUBSCRIPTIONS</p>
    <button class="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200">
      <X :size="14" class="sm:hidden" />
      <X :size="16" class="hidden sm:block" />
    </button>
  </div>

  <!-- Dark Overlay - dynamically positioned -->
  <div 
    v-if="activeDropdown" 
    class="fixed inset-0 bg-black bg-opacity-60 z-10 transition-opacity duration-300"
    :style="{ top: $refs.header ? $refs.header.offsetHeight + 'px' : '120px' }"
  ></div>

  <!-- Main Header -->
  <header ref="header" class="bg-white sticky top-0 z-50">   <!-- style="box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05)" -->
    <div class="max-w-[1600px] mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-2">
      
      <!-- Mobile Header Row (up to 991px) -->
      <div class="max-[991px]:flex hidden items-center justify-between h-16 xs:h-18 sm:h-20">
        <!-- Mobile Logo - moved to left -->
        <div class="flex-shrink-0 flex items-center">
          <Link href="/">
            <img 
              src="/logo.svg" 
              alt="Guranse Logo" 
              class="w-14 h-14 min-[475px]:w-14 min-[475px]:h-14 sm:w-16 sm:h-16 md:w-18 md:h-18" 
            />
          </Link>
        </div>

        <!-- Mobile Right Side Icons -->
        <div class="flex items-center space-x-1 min-[475px]:space-x-2 sm:space-x-3">
          <!-- Animated Hamburger Button -->
          <button class="p-1 xs:p-2 text-guranse-text" @click="isMenuOpen = !isMenuOpen">
            <Menu :size="20" class="min-[475px]:hidden" />
            <Menu :size="22" class="hidden min-[475px]:block sm:hidden" />
            <Menu :size="24" class="hidden sm:block" />
          </button>

          <button class="p-1 min-[475px]:p-2 hidden min-[475px]:block">
            <MapPin :size="18" class="min-[475px]:block sm:hidden text-guranse-text" />
            <MapPin :size="20" class="hidden sm:block text-guranse-text" />
          </button>
          <button class="p-1 min-[475px]:p-2 hidden min-[475px]:block">
            <User :size="18" class="min-[475px]:block sm:hidden text-guranse-text" />
            <User :size="20" class="hidden sm:block text-guranse-text" />
          </button>
          <button class="p-1 min-[475px]:p-2 relative">
            <ShoppingCart :size="16" class="min-[475px]:hidden text-guranse-text" />
            <ShoppingCart :size="18" class="hidden min-[475px]:block sm:hidden text-guranse-text" />
            <ShoppingCart :size="20" class="hidden sm:block text-guranse-text" />
            <span class="absolute -top-0.5 -right-0.5 min-[475px]:-top-1 min-[475px]:-right-1 bg-guranse-accent text-white text-xs rounded-full w-4 h-4 min-[475px]:w-5 min-[475px]:h-5 flex items-center justify-center font-medium text-[10px] min-[475px]:text-xs">
              0
            </span>
          </button>
        </div>
      </div>

      <!-- Mobile Search Bar -->
      <div class="max-[991px]:block hidden py-2 min-[475px]:py-2 sm:py-2">
        <div class="relative">
          <input
            type="text"
            placeholder="Search the site"
            class="font-nunito w-full pl-8 min-[475px]:pl-10 sm:pl-12 pr-3 py-2 min-[475px]:pr-4 py-2 min-[475px]:py-2 sm:py-2 border border-gray-500 rounded-none focus:ring-guranse-text focus:border-guranse-text text-gray-600 bg-transparent text-sm min-[475px]:text-base placeholder:text-xs min-[475px]:placeholder:text-sm"
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
                class="font-metropolis-spaced w-full pl-12 pr-4 py-2 border border-gray-500 rounded-none focus:ring-guranse-text focus:border-guranse-text text-gray-600 bg-transparent placeholder:text-xs"
              />
              <Search :size="16" class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
        <div class="flex items-center space-x-6 flex-1 justify-end">
          <button class="flex items-center text-guranse-text hover:text-guranse-accent transition-colors">
            <MapPin :size="18" class="mr-1" />
            <span class="font-metropolis-spaced text-[12px] font-semibold">STORE</span>
          </button>
          <button class="flex items-center text-guranse-text hover:text-guranse-accent transition-colors">
            <User :size="18" class="mr-1" />
            <span class="font-metropolis-spaced text-[12px] font-semibold">SIGN IN</span>
          </button>
          <button class="flex items-center text-guranse-text hover:text-guranse-accent transition-colors relative">
            <ShoppingCart :size="18"/>
            <span class="ml-1 bg-guranse-accent text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-medium">
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
              class="font-metropolis-spaced flex items-center text-guranse-text font-semibold transition-colors text-[12px] h-full px-4 py-2"
              :class="{ 'text-guranse-accent': activeDropdown === 'ourStory' }"
            >
              OUR STORY
              <Plus :size="16" class="ml-2 transition-transform" :class="{ 'rotate-45': activeDropdown === 'ourStory' }" />
            </Link>
            <div 
              v-if="activeDropdown === 'ourStory'"
              class="absolute top-full left-1/2 transform -translate-x-1/2 w-96 bg-white shadow-2xl z-20 overflow-hidden"
            >
              <div class="p-6" style="box-shadow: inset 0 4px 6px -1px rgb(0 0 0 / 0.05)">
                <h3 class="font-metropolis-spaced text-sm font-bold text-guranse-text mb-6 tracking-wide">GURANSE STORY</h3>
                <div class="space-y-4">
                  <Link href="/csr" class="group/item flex items-start text-[12px] p-4 hover:bg-gray-100 transition-colors">
                    <div class="flex-1">
                      <div class="font-metropolis-spaced text-guranse-text group-hover/item:text-guranse-accent font-semibold mb-1 transition-colors">CORPORATE SOCIAL RESPONSIBILITY</div>
                      <div class="font-nunito text-xs text-guranse-text group-hover/item:text-gray-600 transition-colors">CSR initiatives</div>
                    </div>
                  </Link>
                  <Link href="/recognition" class="group/item flex items-start text-[12px] p-4 hover:bg-gray-100 transition-colors">
                    <div class="flex-1">
                      <div class="font-metropolis-spaced text-guranse-text group-hover/item:text-guranse-accent font-semibold mb-1 transition-colors">RECOGNITION</div>
                      <div class="font-nunito text-xs text-guranse-text group-hover/item:text-gray-600 transition-colors">Awards and achievements</div>
                    </div>
                  </Link>
                  <Link href="/gallery" class="group/item flex items-start text-[12px] p-4 hover:bg-gray-100 transition-colors">
                    <div class="flex-1">
                      <div class="font-metropolis-spaced text-guranse-text group-hover/item:text-guranse-accent font-semibold mb-1 transition-colors">GALLERY</div>
                      <div class="font-nunito text-xs text-guranse-text group-hover/item:text-gray-600 transition-colors">Visual journey of our heritage</div>
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
              class="font-metropolis-spaced flex items-center text-guranse-text font-semibold transition-colors text-[12px] h-full px-4 py-2"
              :class="{ 'text-guranse-accent': activeDropdown === 'terroir' }"
            >
              TERROIR
              <Plus :size="16" class="ml-2 transition-transform" :class="{ 'rotate-45': activeDropdown === 'terroir' }" />
            </Link>
            <div 
              v-if="activeDropdown === 'terroir'"
              class="absolute top-full left-1/2 transform -translate-x-1/2 w-96 bg-white shadow-2xl border border-gray-100 z-20 overflow-hidden"
            >
              <div class="p-6" style="box-shadow: inset 0 4px 6px -1px rgb(0 0 0 / 0.05)">
                <h3 class="font-metropolis-spaced text-sm font-bold text-guranse-text mb-6 tracking-wide">TERROIR</h3>
                <div class="space-y-4">
                  <Link href="/flavours" class="group/item flex items-start text-[12px] p-4 hover:bg-gray-100 transition-colors">
                    <div class="flex-1">
                      <div class="font-metropolis-spaced text-guranse-text group-hover/item:text-guranse-accent font-semibold mb-1 transition-colors">FLAVOURS</div>
                      <div class="font-nunito text-xs text-guranse-text group-hover/item:text-gray-600 transition-colors">Unique taste profiles from our gardens</div>
                    </div>
                  </Link>
                  <Link href="/process" class="group/item flex items-start text-[12px] p-4 hover:bg-gray-100 transition-colors">
                    <div class="flex-1">
                      <div class="font-metropolis-spaced text-guranse-text group-hover/item:text-guranse-accent font-semibold mb-1 transition-colors">PROCESS</div>
                      <div class="font-nunito text-xs text-guranse-text group-hover/item:text-gray-600 transition-colors">Traditional cultivation methods</div>
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
              class="font-metropolis-spaced flex items-center text-guranse-text font-semibold transition-colors text-[12px] h-full px-4 py-2"
              :class="{ 'text-guranse-accent': activeDropdown === 'shop' }"
            >
              SHOP
              <Plus :size="16" class="ml-2 transition-transform" :class="{ 'rotate-45': activeDropdown === 'shop' }" />
            </Link>
            <div 
              v-if="activeDropdown === 'shop'"
              class="absolute top-full left-1/2 transform -translate-x-1/2 w-96 bg-white shadow-2xl border border-gray-100 z-20 overflow-hidden"
            >
              <div class="p-6" style="box-shadow: inset 0 4px 6px -1px rgb(0 0 0 / 0.05)">
                <h3 class="font-metropolis-spaced text-sm font-bold text-guranse-text mb-6 tracking-wide">SHOP TEAS</h3>
                <div class="space-y-4">
                  <Link href="/teaware" class="group/item flex items-start text-[12px] p-4 hover:bg-gray-100 transition-colors">
                    <div class="flex-1">
                      <div class="font-metropolis-spaced text-guranse-text group-hover/item:text-guranse-accent font-semibold mb-1 transition-colors">TEAWARE</div>
                      <div class="font-nunito text-xs text-guranse-text group-hover/item:text-gray-600 transition-colors">Premium tea accessories and tools</div>
                    </div>
                  </Link>
                  <Link href="/pure-loose-leaf" class="group/item flex items-start text-[12px] p-4 hover:bg-gray-100 transition-colors">
                    <div class="flex-1">
                      <div class="font-metropolis-spaced text-guranse-text group-hover/item:text-guranse-accent font-semibold mb-1 transition-colors">PURE LOOSE LEAF</div>
                      <div class="font-nunito text-xs text-guranse-text group-hover/item:text-gray-600 transition-colors">Finest quality loose leaf teas</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <!-- Single Menu Items -->
          <Link href="/faqs" class="font-metropolis-spaced text-guranse-text font-semibold transition-colors text-[12px] h-full px-4 py-2 flex items-center">
            FAQS
          </Link>
          <Link href="/wholesale" class="font-metropolis-spaced text-guranse-text font-semibold transition-colors text-[12px] h-full px-4 py-2 flex items-center">
            WHOLESALE
          </Link>
          <Link href="/blogs" class="font-metropolis-spaced text-guranse-text font-semibold transition-colors text-[12px] h-full px-4 py-2 flex items-center">
            BLOGS
          </Link>
        </nav>
      </div>
    </div>

    <!-- Mobile Menu with Slide Animation -->
    <div 
      class="max-[991px]:block hidden bg-white overflow-hidden transition-all duration-300 ease-in-out"
      :class="isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'"
      style="box-shadow: inset 0 4px 6px -1px rgb(0 0 0 / 0.1)"
    >
      <nav 
        class="px-2 min-[475px]:px-3 sm:px-4 py-4 min-[475px]:py-4 sm:py-6 space-y-4 min-[475px]:space-y-5 sm:space-y-4 transform transition-all duration-300 ease-in-out"
        :class="isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'"
      >
        <!-- Our Story Mobile -->
        <div class="space-y-2 min-[475px]:space-y-2">
          <div class="mx-[-2px] min-[475px]:mx-[-3px] sm:mx-[-4px] border-b border-gray-50">
            <div class="flex items-center justify-between w-full">
              <Link 
                href="/our-story" 
                class="font-metropolis-spaced flex items-center text-guranse-text font-medium py-1.5 min-[475px]:py-2 tracking-wide text-xs min-[475px]:text-xs w-full"
              >
                OUR STORY
              </Link>
              <button 
                class="p-2"
                @click="toggleMobileDropdown('ourStory')"
              >
                <Plus :size="14" class="min-[475px]:hidden text-guranse-text transition-transform duration-200" :class="{ 'rotate-45': activeMobileDropdown === 'ourStory' }" />
                <Plus :size="16" class="hidden min-[475px]:block text-guranse-text transition-transform duration-200" :class="{ 'rotate-45': activeMobileDropdown === 'ourStory' }" />
              </button>
            </div>
          </div>
          <div 
            v-if="activeMobileDropdown === 'ourStory'" 
            class="space-y-1 min-[475px]:space-y-1 animate-fadeInDown"
          >
            <Link href="/csr" class="font-metropolis-spaced block text-guranse-text font-medium hover:text-guranse-accent py-1.5 min-[475px]:py-2 pl-3 min-[475px]:pl-4 text-[10px] min-[475px]:text-[10px] transition-colors">
              CORPORATE SOCIAL RESPONSIBILITY
            </Link>
            <Link href="/recognition" class="font-metropolis-spaced block text-guranse-text font-medium hover:text-guranse-accent py-1.5 min-[475px]:py-2 pl-3 min-[475px]:pl-4 text-[10px] min-[475px]:text-[10px] transition-colors">
              RECOGNITION
            </Link>
            <Link href="/gallery" class="font-metropolis-spaced block text-guranse-text font-medium hover:text-guranse-accent py-1.5 min-[475px]:py-2 pl-3 min-[475px]:pl-4 text-[10px] min-[475px]:text-[10px] transition-colors">
              GALLERY
            </Link>
          </div>
        </div>

        <!-- Terroir Mobile -->
        <div class="space-y-2 min-[475px]:space-y-2">
          <div class="mx-[-2px] min-[475px]:mx-[-3px] sm:mx-[-4px] border-b border-gray-50">
            <div class="flex items-center justify-between w-full">
              <Link 
                href="/terroir" 
                class="font-metropolis-spaced flex items-center text-guranse-text font-medium py-1.5 min-[475px]:py-2 tracking-wide text-xs min-[475px]:text-xs w-full"
              >
                TERROIR
              </Link>
              <button 
                class="p-2"
                @click="toggleMobileDropdown('terroir')"
              >
                <Plus :size="14" class="min-[475px]:hidden text-guranse-text transition-transform duration-200" :class="{ 'rotate-45': activeMobileDropdown === 'terroir' }" />
                <Plus :size="16" class="hidden min-[475px]:block text-guranse-text transition-transform duration-200" :class="{ 'rotate-45': activeMobileDropdown === 'terroir' }" />
              </button>
            </div>
          </div>
          <div 
            v-if="activeMobileDropdown === 'terroir'" 
            class="space-y-1 min-[475px]:space-y-1 animate-fadeInDown"
          >
            <Link href="/flavours" class="font-metropolis-spaced block text-guranse-text font-medium hover:text-guranse-accent py-1.5 min-[475px]:py-2 pl-3 min-[475px]:pl-4 text-[10px] min-[475px]:text-[10px] transition-colors">
              FLAVOUR
            </Link>
            <Link href="/process" class="font-metropolis-spaced block text-guranse-text font-medium hover:text-guranse-accent py-1.5 min-[475px]:py-2 pl-3 min-[475px]:pl-4 text-[10px] min-[475px]:text-[10px] transition-colors">
              PROCESS
            </Link>
          </div>
        </div>

        <!-- Shop Mobile -->
        <div class="space-y-2 min-[475px]:space-y-2">
          <div class="mx-[-2px] min-[475px]:mx-[-3px] sm:mx-[-4px] border-b border-gray-50">
            <div class="flex items-center justify-between w-full">
              <Link 
                href="/shop" 
                class="font-metropolis-spaced flex items-center text-guranse-text font-medium py-1.5 min-[475px]:py-2 tracking-wide text-xs min-[475px]:text-xs w-full"
              >
                SHOP
              </Link>
              <button 
                class="p-2"
                @click="toggleMobileDropdown('shop')"
              >
                <Plus :size="14" class="min-[475px]:hidden text-guranse-text transition-transform duration-200" :class="{ 'rotate-45': activeMobileDropdown === 'shop' }" />
                <Plus :size="16" class="hidden min-[475px]:block text-guranse-text transition-transform duration-200" :class="{ 'rotate-45': activeMobileDropdown === 'shop' }" />
              </button>
            </div>
          </div>
          <div 
            v-if="activeMobileDropdown === 'shop'" 
            class="space-y-1 min-[475px]:space-y-1 animate-fadeInDown"
          >
            <Link href="/teaware" class="font-metropolis-spaced block text-guranse-text font-medium hover:text-guranse-accent py-1.5 min-[475px]:py-2 pl-3 min-[475px]:pl-4 text-[10px] min-[475px]:text-[10px] transition-colors">
              TEAWARE
            </Link>
            <Link href="/pure-loose-leaf" class="font-metropolis-spaced block text-guranse-text font-medium hover:text-guranse-accent py-1.5 min-[475px]:py-2 pl-3 min-[475px]:pl-4 text-[10px] min-[475px]:text-[10px] transition-colors">
              PURE LOOSE LEAF
            </Link>
          </div>
        </div>

        <!-- Single Items Mobile -->
        <Link href="/faqs" class="font-metropolis-spaced block text-guranse-text font-medium hover:text-guranse-accent py-1.5 min-[475px]:py-2 tracking-wide border-b border-gray-50 text-xs min-[475px]:text-xs transition-colors">
          FAQS
        </Link>
        <Link href="/wholesale" class="font-metropolis-spaced block text-guranse-text font-medium hover:text-guranse-accent py-1.5 min-[475px]:py-2 tracking-wide border-b border-gray-50 text-xs min-[475px]:text-xs transition-colors">
          WHOLESALE
        </Link>
        <Link href="/blogs" class="font-metropolis-spaced block text-guranse-text font-medium hover:text-guranse-accent py-1.5 min-[475px]:py-2 tracking-wide text-xs min-[475px]:text-xs transition-colors">
          BLOGS
        </Link>

        <div class="pt-2 min-[475px]:pt-3 sm:pt-4 border-t border-gray-100 space-y-2 min-[475px]:space-y-3">
          <Link href="/stores" class="font-metropolis-spaced flex items-center text-guranse-accent font-medium hover:text-guranse-accent py-1.5 min-[475px]:py-2 text-xs min-[475px]:text-xs transition-colors">
            <MapPin :size="14" class="mr-1.5 min-[475px]:mr-2 min-[475px]:hidden" />
            <MapPin :size="16" class="mr-1.5 min-[475px]:mr-2 hidden min-[475px]:block" />
            <span class="font-metropolis-spaced text-xs min-[475px]:text-xs font-medium">STORE</span>
          </Link>
          <Link href="/signin" class="font-metropolis-spaced flex items-center text-guranse-accent font-medium hover:text-guranse-accent py-1.5 min-[475px]:py-2 text-xs min-[475px]:text-xs transition-colors">
            <User :size="14" class="mr-1.5 min-[475px]:mr-2 min-[475px]:hidden" />
            <User :size="16" class="mr-1.5 min-[475px]:mr-2 hidden min-[475px]:block" />
            <span class="font-metropolis-spaced text-xs min-[475px]:text-xs font-medium">SIGN IN</span>
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

<style scoped>
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInDown {
  animation: fadeInDown 0.3s ease-out;
}
</style>