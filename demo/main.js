import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueSidebarMenu from '../src/index'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Dashboard from './components/Dashboard.vue'

import RoomsList from './components/RoomsOperations/RoomsList/RoomsList.vue'
import RoomDetails from './components/RoomsOperations/RoomBooking/RoomDetails.vue'
import PaymentTrackers from './components/RoomsOperations/PaymentTrackers/PaymentTrackers.vue'
import CheckingList from './components/RoomsOperations/CheckingList/CheckingList.vue'
import CheckoutList from './components/RoomsOperations/CheckoutList/CheckoutList.vue'
import ReservationList from './components/RoomsOperations/ReservationList/ReservationList.vue'
import TempRoomList from './components/RoomsOperations/TempRoomList/TempRoomList.vue'
import CancelReservationList from './components/RoomsOperations/CancelReservationList/CancelReservationList.vue'
import CheckoutPendingList from './components/RoomsOperations/CheckoutPendingList/CheckoutPendingList.vue'
import BookingDeposit from './components/RoomsOperations/BookingDeposit/BookingDeposit.vue'

import AllocationList from './components/Kitchen/AllocationList.vue'
import OrdersList from './components/Kitchen/OrdersList.vue'

import FoodsList from './components/Foods/FoodsList.vue'
import CategoryList from './components/Foods/CategoryList.vue'
import AvailableFood from './components/Foods/AvailableFood.vue'

import FoodReservation from './components/FoodReservation/FoodReservation'
import FoodDetails from './components/FoodReservation/FoodDetails'
import AddedFoodList from './components/FoodReservation/AddedFoodList'
import OrderedFoodList from './components/FoodReservation/OrderedFoodList'

import CategoryListAct from './components/Activities/CategoryListAct'
import ActivityList from './components/Activities/ActivityList'
import ActivityView from './components/Activities/ActivityView'
import ActivityDetails from './components/Activities/ActivityDetails'
import AddedActivityList from './components/Activities/AddedActivityList'
import OrderedActivityList from './components/Activities/OrderedActivityList'
import AllocationActivity from './components/Activities/AllocationActivity'
import ActivityOrderList from './components/Activities/ActivityOrderList'

import Reports from './components/Reports/Reports'


import Props from './components/Props.vue'
import Events from './components/Events.vue'
import Styling from './components/Styling.vue'


Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueSidebarMenu)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },


    {
      path: '/RoomsOperations/RoomsList/RoomsList',
      name: 'RoomsList',
      component: RoomsList
    },
    {
      path: '/RoomsOperations/RoomBooking/RoomDetails',
      name: 'RoomDetails',
      component: RoomDetails
    },
    {
      path: '/RoomsOperations/PaymentTrackers/PaymentTrackers',
      name: 'PaymentTrackers',
      component: PaymentTrackers
    },
    {
      path: '/RoomsOperations/CheckingList/CheckingList',
      name: 'CheckingList',
      component: CheckingList
    },
    {
      path: '/RoomsOperations/CheckoutList/CheckoutList',
      name: 'CheckoutList',
      component: CheckoutList
    },
    {
      path: '/RoomsOperations/ReservationList/ReservationList',
      name: 'ReservationList',
      component: ReservationList
    },
    {
      path: '/RoomsOperations/TempRoomList/TempRoomList',
      name: 'TempRoomList',
      component: TempRoomList
    },
    {
      path: '/RoomsOperations/CancelReservationList/CancelReservationList',
      name: 'CancelReservationList',
      component: CancelReservationList
    },
    {
      path: '/RoomsOperations/CheckoutPendingList/CheckoutPendingList',
      name: 'CheckoutPendingList',
      component: CheckoutPendingList
    },
    {
      path: '/RoomsOperations/BookingDeposit/BookingDeposit',
      name: 'BookingDeposit',
      component: BookingDeposit
    },



    {
      path: '/Kitchen/AllocationList',
      name: 'AllocationList',
      component: AllocationList
    },
    {
      path: '/Kitchen/OrdersList',
      name: 'OrdersList',
      component: OrdersList
    },



    {
      path: '/Foods/FoodsList',
      name: 'FoodsList',
      component: FoodsList
    },
    {
      path: '/Foods/CategoryList',
      name: 'CategoryList',
      component: CategoryList
    },
    {
      path: '/Foods/AvailableFood',
      name: 'AvailableFood',
      component: AvailableFood
    },




    {
      path: '/FoodReservation/FoodReservation',
      name: 'FoodReservation',
      component: FoodReservation
    },
    {
      path: '/FoodReservation/FoodDetails',
      name: 'FoodDetails',
      component: FoodDetails
    },
    {
      path: '/FoodReservation/AddedFoodList',
      name: 'AddedFoodList',
      component: AddedFoodList
    },
    {
      path: '/FoodReservation/OrderedFoodList',
      name: 'OrderedFoodList',
      component: OrderedFoodList
    },



    {
      path: '/Activities/CategoryListAct',
      name: 'CategoryListAct',
      component: CategoryListAct
    },
    {
      path: '/Activities/ActivityList',
      name: 'ActivityList',
      component: ActivityList
    },
    {
      path: '/Activities/ActivityView',
      name: 'ActivityView',
      component: ActivityView
    },
    {
      path: '/Activities/ActivityDetails',
      name: 'ActivityDetails',
      component: ActivityDetails
    },
    {
      path: '/Activities/AddedActivityList',
      name: 'AddedActivityList',
      component: AddedActivityList
    },
    {
      path: '/Activities/OrderedActivityList',
      name: 'OrderedActivityList',
      component: OrderedActivityList
    },
    {
      path: '/Activities/AllocationActivity',
      name: 'AllocationActivity',
      component: AllocationActivity
    },
    {
      path: '/Activities/ActivityOrderList',
      name: 'ActivityOrderList',
      component: ActivityOrderList
    },



    {
      path: '/Reports/Reports',
      name: 'Reports',
      component: Reports
    },













    {
      path: '/props',
      name: 'Props',
      component: Props
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
   
  ]
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  render: h => h(App)
})
