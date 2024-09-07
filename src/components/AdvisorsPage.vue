<template>
    <div class="advisors-page">
      <h2>Our Advisors</h2>
      <div class="advisors-grid">
        <div
          class="advisor-card"
          v-for="advisor in advisors"
          :key="advisor.id"
          @click="showAdvisorDetails(advisor)"
        >
          <img :src="advisor.image" :alt="advisor.name" class="advisor-image" />
          <p class="advisor-name">{{ advisor.name }}</p>
        </div>
      </div>
  
      <!-- Popup for advisor details -->
      <div v-if="showPopup" class="popup-overlay" @click.self="closePopup">
        <div class="popup-content">
          <button class="close-button" @click="closePopup">X</button>
          <h3>{{ selectedAdvisor.name }}</h3>
          <p><strong>Department:</strong> {{ selectedAdvisor.department }}</p>
          <p><strong>Email:</strong> {{ selectedAdvisor.email }}</p>
          <p><strong>Phone:</strong> {{ selectedAdvisor.phone }}</p>
          <p><strong>Office:</strong> {{ selectedAdvisor.office }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdvisorsPage',
    data() {
      return {
        advisors: [
          {
            //sample advisor, add/edit more advisors as needed
            id: 1,
            name: 'John Doe',
            image: require('@/assets/img3.png'),
            department: 'Computer Science',
            email: 'john.doe@example.com',
            phone: '(123) 456-7890',
            office: 'Building A, Room 101',
          },
          {
            id: 2,
            name: 'Jane Smith',
            image: require('@/assets/img3.png'),
            department: 'Electrical Engineering',
            email: 'jane.smith@example.com',
            phone: '(987) 654-3210',
            office: 'Building B, Room 202',
          },
          {
            id: 3,
            name: 'John Doe',
            image: require('@/assets/img3.png'),
            department: 'Computer Science',
            email: 'john.doe@example.com',
            phone: '(123) 456-7890',
            office: 'Building A, Room 101',
          },
          {
            id: 4,
            name: 'Jane Smith',
            image: require('@/assets/img3.png'),
            department: 'Electrical Engineering',
            email: 'jane.smith@example.com',
            phone: '(987) 654-3210',
            office: 'Building B, Room 202',
          },
          {
            id: 5,
            name: 'John Doe',
            image: require('@/assets/img3.png'),
            department: 'Computer Science',
            email: 'john.doe@example.com',
            phone: '(123) 456-7890',
            office: 'Building A, Room 101',
          },
          {
            id: 6,
            name: 'Jane Smith',
            image: require('@/assets/img3.png'),
            department: 'Electrical Engineering',
            email: 'jane.smith@example.com',
            phone: '(987) 654-3210',
            office: 'Building B, Room 202',
          },
          {
            id: 7,
            name: 'John Doe',
            image: require('@/assets/img3.png'),
            department: 'Computer Science',
            email: 'john.doe@example.com',
            phone: '(123) 456-7890',
            office: 'Building A, Room 101',
          },
          {
            id: 8,
            name: 'Jane Smith',
            image: require('@/assets/img3.png'),
            department: 'Electrical Engineering',
            email: 'jane.smith@example.com',
            phone: '(987) 654-3210',
            office: 'Building B, Room 202',
          },
          {
            id: 9,
            name: 'John Doe',
            image: require('@/assets/img3.png'),
            department: 'Computer Science',
            email: 'john.doe@example.com',
            phone: '(123) 456-7890',
            office: 'Building A, Room 101',
          },
          {
            id: 10,
            name: 'Jane Smith',
            image: require('@/assets/img3.png'),
            department: 'Electrical Engineering',
            email: 'jane.smith@example.com',
            phone: '(987) 654-3210',
            office: 'Building B, Room 202',
          },
          {
            id: 11,
            name: 'John Doe',
            image: require('@/assets/img3.png'),
            department: 'Computer Science',
            email: 'john.doe@example.com',
            phone: '(123) 456-7890',
            office: 'Building A, Room 101',
          },
          {
            id: 12,
            name: 'Jane Smith',
            image: require('@/assets/img3.png'),
            department: 'Electrical Engineering',
            email: 'jane.smith@example.com',
            phone: '(987) 654-3210',
            office: 'Building B, Room 202',
          },
          {
            id: 13,
            name: 'Jane Smith',
            image: require('@/assets/img3.png'),
            department: 'Electrical Engineering',
            email: 'jane.smith@example.com',
            phone: '(987) 654-3210',
            office: 'Building B, Room 202',
          },
          {
            id: 14,
            name: 'John Doe',
            image: require('@/assets/img3.png'),
            department: 'Computer Science',
            email: 'john.doe@example.com',
            phone: '(123) 456-7890',
            office: 'Building A, Room 101',
          },
          {
            id: 15,
            name: 'Jane Smith',
            image: require('@/assets/img3.png'),
            department: 'Electrical Engineering',
            email: 'jane.smith@example.com',
            phone: '(987) 654-3210',
            office: 'Building B, Room 202',
          },
          {
            id: 16,
            name: 'John Doe',
            image: require('@/assets/img3.png'),
            department: 'Computer Science',
            email: 'john.doe@example.com',
            phone: '(123) 456-7890',
            office: 'Building A, Room 101',
          },
          {
            id: 17,
            name: 'Jane Smith',
            image: require('@/assets/img3.png'),
            department: 'Electrical Engineering',
            email: 'jane.smith@example.com',
            phone: '(987) 654-3210',
            office: 'Building B, Room 202',
          },
          {
            id: 18,
            name: 'John Doe',
            image: require('@/assets/img3.png'),
            department: 'Computer Science',
            email: 'john.doe@example.com',
            phone: '(123) 456-7890',
            office: 'Building A, Room 101',
          },
          {
            id: 19,
            name: 'Jane Smith',
            image: require('@/assets/img3.png'),
            department: 'Electrical Engineering',
            email: 'jane.smith@example.com',
            phone: '(987) 654-3210',
            office: 'Building B, Room 202',
          },
          {
            id: 20,
            name: 'Jane Smith',
            image: require('@/assets/img3.png'),
            department: 'Electrical Engineering',
            email: 'jane.smith@example.com',
            phone: '(987) 654-3210',
            office: 'Building B, Room 202',
          },
          {
            id: 21,
            name: 'John Doe',
            image: require('@/assets/img3.png'),
            department: 'Computer Science',
            email: 'john.doe@example.com',
            phone: '(123) 456-7890',
            office: 'Building A, Room 101',
          },
          {
            id: 22,
            name: 'Jane Smith',
            image: require('@/assets/img3.png'),
            department: 'Electrical Engineering',
            email: 'jane.smith@example.com',
            phone: '(987) 654-3210',
            office: 'Building B, Room 202',
          },
          {
            id: 23,
            name: 'John Doe',
            image: require('@/assets/img3.png'),
            department: 'Computer Science',
            email: 'john.doe@example.com',
            phone: '(123) 456-7890',
            office: 'Building A, Room 101',
          },
          {
            id: 24,
            name: 'Jane Smith',
            image: require('@/assets/img3.png'),
            department: 'Electrical Engineering',
            email: 'jane.smith@example.com',
            phone: '(987) 654-3210',
            office: 'Building B, Room 202',
          },
          
          // Add more advisors here...
        ],
        selectedAdvisor: null,
        showPopup: false,
      };
    },
    methods: {
    //method to manage the popup
      showAdvisorDetails(advisor) {
        this.selectedAdvisor = advisor;
        this.showPopup = true;
      },
      closePopup() {
        this.showPopup = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .advisors-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  h2 {
    margin-bottom: 20px;
  }
  
  .advisors-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 50px;
    width: 100%;
    max-width: 1200px;
  }
  
  .advisor-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
  
  .advisor-image {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .advisor-name {
    margin-top: 10px;
    font-weight: bold;
    text-align: center;
  }
  
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .popup-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    width: 300px;
    position: relative;
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 16px;
    cursor: pointer;
  }
  </style>
  