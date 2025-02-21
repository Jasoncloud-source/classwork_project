<template>
     
    
    <v-container>
      <v-container>
        <v-card color="blue" >
            <v-card-title>
                <div class="text-h3">Our Menu</div>
            </v-card-title>
        </v-card>
      </v-container>
        <v-card class="mx-auto" elevation="24">
            <v-container>
            <v-row>
                <v-col cols="12" md="4" v-for="item in menuItems":key=item>
                    <v-card>
                        <v-card  color="#D79828">
                            <v-card-item>
                                <v-card-title>{{ item.name }}</v-card-title>

                                <v-card-subtitle>{{ item.description }} </v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" src="https://images.unsplash.com/photo-1624300629298-e9de39c13be5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VGFjb3N8ZW58MHx8MHx8fDA%3D"cover></v-img>
                        <v-card-text>
                        {{ item.price }}
                        <v-btn color="black" @click="addToOrder(item)">Order</v-btn>
                        </v-card-text>
                        </v-card>
                        
                    </v-card>

                </v-col>
            </v-row>
            </v-container>
        </v-card>
    </v-container>
   
    <v-card color="blue" >
            <v-card-title>
                <div class="text-h6">Current order: {{totalOrderAmount}}</div>
            </v-card-title>
        </v-card>
    
    <v-container>
        <v-card class="mx-auto" elevation="24">
            <v-container>
                <v-row>
                    <v-col cols="12" md="4" v-for="item in orderItems" :key=item>
                        <v-card color="yellow">
                            <v-card-item>
                            <v-card-title>{{ item.name }}</v-card-title>

                            <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" :src="item.image" cover ></v-img>

                            <v-card-text>{{ item.price }}</v-card-text>
                        </v-card>
                        </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-container>
</template>

<script setup>
const menuItems = [
    {
        name: "Chips",
        price: 200,
        description: "Best chips in town",
        size: "Large",
        offers: "None",
        image: "https://unsplash.com/photos/a-basket-of-french-fries-sitting-on-top-of-a-wooden-table-ChXHveqrb28?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
    },
    {
        name: "Sausage",
        price: 50,
        description: "Best sausages in town",
        size: "None",
        offers: "None",
        image: "https://unsplash.com/photos/sausage-on-black-round-pan-cSxpCQrRlo8"
    },
    {
        name: "Soda",
        price: 100,
        description: "Best Soda in town",
        size: "Large",
        offers: "None",
        image: "https://unsplash.com/photos/a-basket-of-french-fries-sitting-on-top-of-a-wooden-table-ChXHveqrb28?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
    },
    {
        name: "Chapati",
        price: 50,
        description: "Best Chapatis in town",
        size: "None",
        offers: "None",
        image: "https://unsplash.com/photos/sausage-on-black-round-pan-cSxpCQrRlo8"
    },
    {
        name: "Tea",
        price: 80,
        description: "Best Tea in town",
        size: "Large",
        offers: "None",
        image: "https://unsplash.com/photos/a-basket-of-french-fries-sitting-on-top-of-a-wooden-table-ChXHveqrb28?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
    },
    {
        name: "Wine",
        price: 5000,
        description: "Best Wine in town",
        size: "None",
        offers: "None",
        image: "https://unsplash.com/photos/sausage-on-black-round-pan-cSxpCQrRlo8"
    } 
    ]
    //Manage the current state of the order
    var orderItems = []
    var totalOrderAmount = 0

    function calculateTotalOrderAmount(price){
        totalOrderAmount += price
    }

    function addToOrder(item){
        orderItems.push(item)
        calculateTotalOrderAmount(item.price)
    }
</script>