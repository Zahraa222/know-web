Written by Zahraa Alhmood
This component is used to display a newsletter subscription form and a list of articles.
The component uses the articles array to display a list of articles with images, titles, summaries, dates, and authors.
The component also includes a newsletter subscription form with options for students and adults to subscribe.
The form includes an email input field and a subscribe button.
<template>
    <div class="newsletter-page">
      <!-- Articles Section -->
      <div class="articles-container">
        <div class="article" v-for="article in articles" :key="article.id">
          <div class="article-image">
            <img :src="article.image" :alt="article.title" />
          </div>
          <h3 class="article-title">{{ article.title }}</h3>
          <p class="article-summary">{{ article.summary }}</p>
          <p class="article-meta">{{ article.date }} by {{ article.author }}</p>
        </div>
      </div>
  
      <!-- Newsletter Subscription Form -->
      <div class="newsletter-subscribe">
        <div class="newsletter-content">
          <!-- Left section: Heading and Paragraph -->
          <div class="subscribe-text">
            <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
            <p class="description">
              Our Weekly Newsletter is a collection of the latest and greatest from KNOW – first access to our events/programs, opportunities for first-gen/immigrants, stories, real talk from our co-founders, and news about first-gen/immigrants changing the world.
            </p>
          </div>

          <!-- Right section: Form with options -->
          <div class="subscribe-form">
            <div class="form-options">
              <p>I am:</p>
              <label>
                <input type="checkbox" name="student" /> student
              </label>
              <label>
                <input type="checkbox" name="adult" /> adult
              </label>
            </div>

            <div class="form-email">
              <label for="email">email address:</label>
              <input type="email" id="email" name="email" />
            </div>

            <button type="submit" class="subscribe-button">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
</template>
  
  <script>
  export default {
    name: 'NewsletterPage',
    data() {
      return {
        articles: [
          {
            id: 1,
            image: require('@/assets/img2.png'),
            title: 'Name of Article 1',
            summary: 'Short summary of the article goes here...',
            date: 'September 10, 2024',
            author: 'Author Name',
          },
          {
            id: 2,
            image: require('@/assets/img2.png'),
            title: 'Name of Article 2',
            summary: 'Short summary of the article goes here...',
            date: 'September 11, 2024',
            author: 'Author Name',
          },
          {
            id: 3,
            image: require('@/assets/img2.png'),
            title: 'Name of Article 3',
            summary: 'Short summary of the article goes here...',
            date: 'September 12, 2024',
            author: 'Author Name',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .newsletter-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .articles-container {
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
  }
  
  .article {
    background-color: #f0f0f0;
    padding: 20px;
    width: 250px;
    text-align: center;
    border-radius: 8px;
  }
  
  .article img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
  
  .article-title {
    font-weight: bold;
    font-size: 18px;
    margin-top: 10px;
  }
  
  .article-summary {
    margin: 10px 0;
    font-size: 14px;
  }
  
  .article-meta {
    font-size: 12px;
    color: #666;
  }
  
  /* Newsletter Subscription Form */
  .newsletter-subscribe {
    background-color: #f0f0f0;
    padding: 40px;
    text-align: center;
    width: 100%;
    max-width: 800px;
    border-radius: 8px;
  }

    .newsletter-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    }

    /* Left side: Text section */
    .subscribe-text {
    width: 60%; /* Left side takes up 60% of the space */
    }
  
  .newsletter-subscribe h2 {
    font-weight: bold;
    margin-bottom: 20px;
    font-family: 'Oswald', sans-serif;
    font-size: 3.5rem;
    color: black;
    line-height: 1.6;
  }
  
  .description {
    font-size: 16px;
    margin-bottom: 20px;
    font-family: "Montserrat", sans-serif;
    flex-wrap: wrap;
    line-height: 1.6;
    color: #000;
  }
  
  .subscribe-form {
  display: flex;
  margin: auto;
  flex-direction: column;
  width: 35%; /* Right side takes up 35% of the space */
  font-family: "Montserrat", sans-serif;
    }

  
  .form-options {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    width: 100%;
    max-width: 300px;
    padding-left: 80px;
    margin-bottom: 20px;
  }
  
  .form-options p {
    font-size: 16px;
    margin: 0;
  }
  
  label {
    display: block;
    font-size: 16px;
  }
  
  .form-email {
    margin-bottom: 20px;
  }
  
  .form-email label {
    font-size: 16px;
  }
  
  input[type='email'] {
    padding: 10px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  .subscribe-button {
    background-color: black;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
  }
  
  .subscribe-button:hover {
    background-color: #333;
  }
  </style>
  