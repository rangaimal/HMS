<template>
  <div id="demo" :class="[{'collapsed' : collapsed}]">
    <div class="demo">
      <div class="container">
        <!-- <button
      class="collapse-btn"
      @click="toggleCollapse"
        />-->
        <!-- <h1>
          HMS
        </h1> -->
       
        <!-- <div>
          Select theme:
          <select v-model="selectedTheme">
            <option
              v-for="(theme, index) in themes"
              :key="index"
            >{{ theme == '' ? 'default-theme' : theme }}</option>
          </select>
        </div> -->
        <!-- <hr style="margin: 50px 0px;border: 1px solid #e3e3e3; width:100%;"> -->
        <router-view/>
      </div>
      <sidebar-menu
        :menu="menu"
        :collapsed="collapsed"
        :theme="selectedTheme"
        :show-one-child="true"
        @collapse="onCollapse"
        @itemClick="onItemClick"
      />
    </div>
  </div>
</template>

<script>
const separator = {
  template: `<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">`
};

export default {
  name: "App",
  data() {
    return {
      menu: [
        {
          header: true,
          title: "HMS"
        },
        {
          href: "/",
          title: "Dashboard",
          icon: "fa fa fa-tachometer"
        },
        {
         
          title: "Rooms Operations",
          icon: "fa fa-key",
          child: [
            {
              href: "/RoomsOperations/RoomsList/RoomsList",
              title: "Rooms List",
              icon: "fa fa-caret-right"
            },
            {
               href: "/RoomsOperations/RoomBooking/RoomDetails",
              title: "Room Booking",
              icon: "fa fa-caret-right"
            },
            {
               href: "/RoomsOperations/PaymentTrackers/PaymentTrackers",
              title: "Payment Trackers",
              icon: "fa fa-caret-right"
            },
            {
               href: "/RoomsOperations/CheckingList/CheckingList",
              title: "Checking List",
              icon: "fa fa-caret-right"
            },
            {
              href: "/RoomsOperations/CheckoutList/CheckoutList",
              title: "Checkout List",
              icon: "fa fa-caret-right"
            },
            {
              href: "/RoomsOperations/ReservationList/ReservationList",
              title: "Reservation List",
              icon: "fa fa-caret-right"
            },
            {
              href: "/RoomsOperations/TempRoomList/TempRoomList",
              title: "Temp Room List",
              icon: "fa fa-caret-right"
            },
            {
              href: "/RoomsOperations/CancelReservationList/CancelReservationList",
              title: "Cancel Reservation List",
              icon: "fa fa-caret-right"
            },
            {
              href: "/RoomsOperations/CheckoutPendingList/CheckoutPendingList",
              title: "Checkout Pending List",
              icon: "fa fa-caret-right"
            },
            {
              href: "/RoomsOperations/BookingDeposit/BookingDeposit",
              title: "Booking Deposit",
              icon: "fa fa-caret-right"
            }
          ]
        },
        {
         
          title: "kitchen",
          icon: "fa fa-glass",
          child: [
            {
              href: "/Kitchen/AllocationList",
              title: "Allocation List",
              icon: "fa fa-caret-right"
            },
            {
              href: "/Kitchen/OrdersList",
              title: "Orders List",
              icon: "fa fa-caret-right"
            }
          ]
        },
        {
         
          title: "Foods",
          icon: "fa fa-cutlery",
          child: [
            {
              href: "/Foods/FoodsList",
              title: "Foods Lists",
              icon: "fa fa-caret-right"
            },
            {
              href: "/Foods/CategoryList",
              title: "Category Lists",
              icon: "fa fa-caret-right"
            }, {
              href: "/Foods/AvailableFood",
              title: "Available Foods",
              icon: "fa fa-caret-right"
            }
          ]
        },
        {
         
          title: "Food Reservation",
          icon: "fa fa-bookmark",
          child: [
            {
               href: "/FoodReservation/FoodReservation",
              title: "Food Reservation Form",
             icon: "fa fa-caret-right"
            },
            {
             href: "/FoodReservation/FoodDetails",
              title: "Food Details",
              icon: "fa fa-caret-right"
            },
            {
              href: "/FoodReservation/AddedFoodList",
              title: "Added Food List(Customer)",
              icon: "fa fa-caret-right"
            },
            {
             href: "/FoodReservation/OrderedFoodList",
              title: "Ordered Food List(Customer)",
              icon: "fa fa-caret-right"
            }
          ]
        },
        {
          
          title: "Activities",
          icon: "fa fa-trophy",
          child: [
            {
              href: "/Activities/CategoryListAct",
              title: "Category List",
              icon: "fa fa-caret-right"
            },
            {
              href: "/Activities/ActivityList",
              title: "Activity List",
              icon: "fa fa-caret-right"
            },
             {
               href: "/Activities/ActivityView",
              title: "Activity View",
              icon: "fa fa-caret-right"
            },
             {
              href: "/Activities/ActivityDetails",
              title: "Activity Details",
              icon: "fa fa-caret-right"
            },
             {
              href: "/Activities/AddedActivityList",
              title: "Added Activity List",
              icon: "fa fa-caret-right"
            },
             {
              href: "/Activities/OrderedActivityList",
              title: "Ordered Activity List",
              icon: "fa fa-caret-right"
            },
             {
              href: "/Activities/AllocationActivity",
              title: "Allocation Activity",
              icon: "fa fa-caret-right"
            },
             {
              href: "/Activities/ActivityOrderList",
              title: "Activity Order List",
              icon: "fa fa-caret-right"
            },
          ]
        },
        // {
        //   header: true,
        //   title: 'Usage'
        // },
        {
          href: "/Reports/Reports",
          title: "Reports",
          icon: "fa fa-book"
        }
        // {
        //   href: '/events',
        //   title: 'Events',
        //   icon: 'fa fa-bell'
        // },
        // {
        //   href: '/styling',
        //   title: 'Styling',
        //   icon: 'fa fa-palette'
        // },
        // {
        //   header: true,
        //   component: separator,
        //   visibleOnCollapse: true
        // },
        // {
        //   header: true,
        //   title: 'Example'
        // },
        // {
        //   href: '/disabled',
        //   title: 'Disabled page',
        //   icon: 'fa fa-lock',
        //   disabled: true
        // },
        // {
        //   title: 'Badge',
        //   icon: 'fa fa-cog',
        //   badge: {
        //     text: 'new',
        //     class: 'default-badge'
        //   }
        // },
        // {
        //   href: '/page',
        //   title: 'Dropdown Page',
        //   icon: 'fa fa-list-ul',
        //   child: [
        //     {
        //       href: '/page/sub-page-1',
        //       title: 'Sub Page 01',
        //       icon: 'fa fa-file-alt'
        //     },
        //     {
        //       href: '/page/sub-page-2',
        //       title: 'Sub Page 02',
        //       icon: 'fa fa-file-alt'
        //     }
        //   ]
        // },
        // {
        //   title: 'Multiple Level',
        //   icon: 'fa fa-list-alt',
        //   child: [
        //     {
        //       title: 'page'
        //     },
        //     {
        //       title: 'Level 2 ',
        //       child: [
        //         {
        //           title: 'page'
        //         },
        //         {
        //           title: 'Page'
        //         }
        //       ]
        //     },
        //     {
        //       title: 'Page'
        //     },
        //     {
        //       title: 'Another Level 2',
        //       child: [
        //         {
        //           title: 'Level 3',
        //           child: [
        //             {
        //               title: 'Page'
        //             },
        //             {
        //               title: 'Page'
        //             }
        //           ]
        //         }
        //       ]
        //     }
        //   ]
        // }
      ],
      collapsed: false,
      themes: ["", "black-theme"],
      selectedTheme: "black-theme"
    };
  },
  methods: {
    onCollapse(collapsed) {
      console.log(collapsed);
      this.collapsed = collapsed;
    },
    onItemClick(event, item) {
      console.log("onItemClick");
      // console.log(event)
      // console.log(item)
    }
  }
};
</script>



<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600");
@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

body,
html {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Source Sans Pro", sans-serif;
  background-color: #f2f4f7;
}

#demo {
  padding-left: 350px;
}
#demo.collapsed {
  padding-left: 50px;
}

.demo {
  padding: 50px;
}

.container {
  max-width: 600px;
}

pre {
  color: #2a2a2e;
  background: #fff;
  border-radius: 2px;
  padding: 10px;
  overflow: auto;
}
</style>
