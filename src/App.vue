


<template>

  <transition
      enter-active-class="animate__animated animate__bounceIn"
      leave-active-class="animate__animated animate__bounceOutLeft"
  >
  <vue-final-modal v-model="showModal">

    <div class="modal-form">
    <div class="modal-form-head">
      <div class="modal-form-logo">
        <img src="@/assets/logo-header.svg" alt="Construction">
      </div>
      <div class="modal-form-close" @click="showModal = false">
        <img src="@/assets/close.svg" alt="Close">
      </div>
    </div>

    <div class="modal-form-body">
      <div class="modal-form-title">Заказать звонок</div>
    </div>
    <form>
      <input type="text" placeholder="Ваше имя*" required>
      <input type="text" placeholder="Ваш телефон*" required>
      <button class="form-button">Отправить</button>
    </form>
    </div>

  </vue-final-modal>

  </transition>


  <header class="site-header" id="site-header">

    <div class="header-top">
      <div class="container">
        <div class="header-row">

        <!-- Header top mobile start -->
          <div class="header-mobile-logo">
            <a href="#">
              <img src="@/assets/logo-header.svg" alt="Construction">
            </a>
          </div>

          <div class="hamburger" @click="headerMobile = !(headerMobile)">
            <span></span>
            <span></span>
          </div>
          <!-- Header top mobile end -->

          <div class="header-desc">Строительные работы всех видов</div>
          <div class="header-right">
            <div class="header-info">
              <img src="@/assets/location.svg" alt="ул. Гагарина 5Б г. Сочи">
              <span>ул. Гагарина 5Б г. Сочи</span>
            </div>
            <a href="tel:+7 950 457 5654" class="header-info">
              <img src="@/assets/phone.svg" alt="+7 950 457 5654">
              <span>+7 950 457 5654</span>
            </a>

            <div class="header-social">
              <a href="https://twitter.com/ConstructToday" target="_blank">
                <img src="@/assets/social-twitter.svg" alt="Twitter">
              </a>
              <a href="https://ru.linkedin.com/company/v.k.-powell-construction-llc" target="_blank">
                <img src="@/assets/social-vk.svg" alt="Вконтакте">
              </a>
              <a href="https://www.facebook.com/constructionfestival/" target="_blank">
                <img src="@/assets/social-facebook.svg" alt="Facebook">
              </a>
              <a href="https://t.me/s/schoolforconstruction" target="_blank">
                <img src="@/assets/social-telegram.svg" alt="Telegram">
              </a>
            </div>
      </div>
    </div>
   </div>
  </div>

    <div class="header-bottom">
      <div class="container">
        <div class="header-bottom-row">
          <div class="header-logo">
            <a href="#site-header"><img src="@/assets/logo-header.svg" alt="Construction"></a>
          </div>
          <nav class="header-nav" id="header-nav">
            <ul>
              <li><a href="#site-header">Главная</a></li>
              <li><a href="#s-why">О нас</a></li>
              <li><a href="#s-services">Услуги</a></li>
              <li><a href="#s-gallery">Галерея</a></li>
              <li><a href="#s-reviews">Отзывы</a></li>
              <li><a href="#site-footer">Контакты</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

  <!--  Header mobile start  -->






      <Vue3SlideUpDown v-model="headerMobile" class="header-mobile-wrap">

      <nav class="header-mobile-nav" id="header-mobile-nav">
        <ul>
          <li><a href="#site-header">Главная</a></li>
          <li><a href="#s-why">О нас</a></li>
          <li><a href="#s-services">Услуги</a></li>
          <li><a href="#s-gallery">Галерея</a></li>
          <li><a href="#s-reviews">Отзывы</a></li>
          <li><a href="#site-footer">Контакты</a></li>
        </ul>
      </nav>


        <div class="header-mobile-info">
          <img src="@/assets/location.svg" alt="ул. Гагарина 5Б г. Сочи">
          <span>ул. Гагарина 5Б г. Сочи</span>
        </div>
        <a href="tel:+7 950 457 5654" class="header-mobile-info">
          <img src="@/assets/phone.svg" alt="+7 950 457 5654">
          <span>+7 950 457 5654</span>
        </a>

        <div class="header-mobile-social">
          <a href="https://twitter.com/ConstructToday">
            <img src="@/assets/social-twitter.svg" alt="Twitter">
          </a>
          <a href="https://ru.linkedin.com/company/v.k.-powell-construction-llc" target="_blank">
            <img src="@/assets/social-vk.svg" alt="Вконтакте">
          </a>
          <a href="https://www.facebook.com/constructionfestival/" target="_blank">
            <img src="@/assets/social-facebook.svg" alt="Facebook">
          </a>
          <a href="https://t.me/s/schoolforconstruction" target="_blank">
            <img src="@/assets/social-telegram.svg" alt="Telegram">
          </a>
        </div>
      </Vue3SlideUpDown>



  <!--  Header mobile end  -->

  </header>

  <section class="s-banner" id="s-banner">

    <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="0"
        navigation
        :pagination="{ clickable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="swiper banner-swiper"
    >
      <swiper-slide class="swiper-slide">
        <div class="banner-content">
        <div class="banner-subtitle">
          Сертифицированная компания
        </div>
        <h2 class="banner-title">
          <strong>Дружественная</strong><br> энергия 24/7 без вреда для планеты
        </h2>
        <a href="#s-services" class="banner-btn def-btn">Смотреть услуги</a>
      </div>
        <img src="~@/assets/banner-bg-1.jpg" alt="Slide 1">
      </swiper-slide>

      <swiper-slide class="swiper-slide">
        <div class="banner-content">
        <div class="banner-subtitle">
          Сертифицированная компания
        </div>
        <h2 class="banner-title">
          <strong>Проектирование зданий.</strong> Только качественные материалы
        </h2>
        <a href="#s-services" class="banner-btn def-btn">Смотреть услуги</a>
      </div>
        <img src="~@/assets/banner-bg-2.jpg" alt="Slide 2">
      </swiper-slide>

      <swiper-slide class="swiper-slide">
        <div class="banner-content">
        <div class="banner-subtitle">
          Сертифицированная компания
        </div>
        <h2 class="banner-title">
          <strong>Строительство домов.</strong> Построим качественный дом за короткий срок
        </h2>
        <a href="#s-services" class="banner-btn def-btn">Смотреть услуги</a>
      </div>
        <img src="~@/assets/banner-bg-3.jpg" alt="Slide 3">
      </swiper-slide>

    </swiper>

  </section>

  <section class="s-about" id="s-about">
    <div class="container">
      <div class="about-row">
        <div class="about-left">
          <div class="def-title">О нашей компании</div>
          <div class="def-desc"><strong>Construction</strong> — это компания, предлагающая полный комплекс услуг по строительному дизайну и придерживающаяся простой и уникальной философии проектирования и строительства. Мы верим в то, что один строительный дизайнер будет выполнять работу от концепции на бумаге до реализации на вашей территории. Причина; делая это, вы можете общаться и работать с одним человеком, где вы можете поделиться своими мыслями и идеями, чтобы воплотить их в жизнь в сотрудничестве.</div>
          <button class="def-btn services-btn" @click="showModal = true">Заказать услугу</button>
        </div>
        <div class="about-right">
          <img src="~@/assets/about-bg.jpg" alt="О нас">
        </div>
      </div>
    </div>
  </section>

  <section class="s-numbers color-white" id="s-numbers">
    <div class="container">
      <div class="numbers-row">
        <div class="numbers-left">
          <h2 class="def-title color-white">Наша компания <br> в цифрах</h2>
          <div class="def-desc">Одним важным критерием нашей компании является клиентоориентированность. Заказывая наши услуги Вы можете быть уверены в качестве результата.</div>
        </div>
        <div class="numbers-right">
          <div class="numbers-item">
            <div class="numbers-num">600</div>
            <div class="numbers-desc">Довольных <br> клиентов</div>
          </div>
          <div class="numbers-item">
            <div class="numbers-num">10</div>
            <div class="numbers-desc">Лет опыта работы</div>
          </div>
          <div class="numbers-item">
            <div class="numbers-num">50</div>
            <div class="numbers-desc">Наград</div>
          </div>
          <div class="numbers-item">
            <div class="numbers-num">100</div>
            <div class="numbers-desc">Реализованных <br> проектов</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="s-services" id="s-services">
    <div class="container">
      <h2 class="center-title">Наши услуги</h2>

      <div class="services-row">
        <div class="services-item">
          <div class="services-thumb">
            <img src="@/assets/service-1.jpg" alt="Строительство домов">
          </div>
          <div class="services-body">
            <h4 class="services-title">Строительство домов</h4>
            <button class="def-btn services-btn" @click="showModal = true">Заказать услугу</button>
          </div>
        </div>
        <div class="services-item">
          <div class="services-thumb">
            <img src="@/assets/service-2.jpg" alt="Строительство домов">
          </div>
          <div class="services-body">
            <h4 class="services-title">Ремонт по дому</h4>
            <button class="def-btn services-btn" @click="showModal = true">Заказать услугу</button>
          </div>
        </div>
        <div class="services-item">
          <div class="services-thumb">
            <img src="@/assets/service-3.jpg" alt="Строительство домов">
          </div>
          <div class="services-body">
            <h4 class="services-title">Проектирование зданий</h4>
            <button class="def-btn services-btn" @click="showModal = true">Заказать услугу</button>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section class="s-gallery" id="s-gallery">
    <div class="container">
      <div class="center-title">Фотогалерея</div>

      <SimpleGallery galleryID="my-test-gallery-primary" :images="getImagesPrimary" class="gallery-wrap" />

      <Vue3SlideUpDown v-model="galleryShowAll">

      <SimpleGallery galleryID="my-test-gallery-additional" :images="getImagesAdditional" class="gallery-wrap galleryAdditionalTop" />

      </Vue3SlideUpDown>


      <div class="gallery-btn">
        <button class="def-btn" @click="showMore">{{ showPhrase }}</button>
      </div>

    </div>


  </section>



  <section class="s-why" id="s-why">
    <div class="container">
      <div class="why-row">

        <div class="why-left">
          <h2 class="def-title">Почему мы?</h2>
          <div class="def-desc">Каждый цвет вызывает разные эмоции у каждого человека.<br>Ваши эмоции по-прежнему зависят от вашего индивидуального жизненного опыта.</div>
          <div class="why-features">

            <div class="why-features-item">
              <div class="why-features-icon">
                <img src="@/assets/check-mark.svg" alt="Check mark">
              </div>
              <div class="why-features-right">
                <div class="why-features-title">Качественные материалы</div>
                <div class="why-features-desc">За 10 лет работы мы опробовали разные материалы и подобрали самые нужные</div>
              </div>
            </div>

            <div class="why-features-item">
              <div class="why-features-icon">
                <img src="@/assets/check-mark.svg" alt="Check mark">
              </div>
              <div class="why-features-right">
                <div class="why-features-title">Работа в срок</div>
                <div class="why-features-desc">Заказываю у нас работу Вы гарантированно получите результат за короткое время</div>
              </div>
            </div>

          </div>
        </div>

        <div class="why-right">
          <img src="@/assets/why-bg.jpg" alt="Почему мы?">
        </div>

      </div>

    </div>
  </section>

  <section class="s-team" id="s-team">
    <div class="container">
      <h2 class="center-title">Наша команда</h2>
      <div class="team-row">

        <div class="team-item">
          <div class="team-thumb">
            <img src="@/assets/team-1.jpg" alt="Игорь Протопский">
          </div>
          <div class="team-body">
            <div class="team-profi">Директор</div>
            <div class="team-name">Игорь Протопский</div>
          </div>
        </div>

        <div class="team-item">
          <div class="team-thumb">
            <img src="@/assets/team-2.jpg" alt="Александр Муравьев">
          </div>
          <div class="team-body">
            <div class="team-profi">Менеджер</div>
            <div class="team-name">Александр Муравьев</div>
          </div>
        </div>

        <div class="team-item">
          <div class="team-thumb">
            <img src="@/assets/team-3.jpg" alt="Сергей Дельфинов">
          </div>
          <div class="team-body">
            <div class="team-profi">Отделочник</div>
            <div class="team-name">Сергей Дельфинов</div>
          </div>
        </div>

      </div>
    </div>
  </section >

  <section class="s-reviews" id="s-reviews">
    <div class="container">
      <h2 class="center-title color-white">Что говорят клиенты</h2>

      <swiper
          :modules="modules"
          :slides-per-view="3"
          :space-between="20"
          :speed="1000"
          :autoHeight=true
          :autoWidth=true
          :pagination="{ clickable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="swiper reviews-swiper"
      >

          <swiper-slide class="swiper-slide">
            <div class="reviews-item">
            <div class="reviews-thumb">
              <img src="@/assets/client-1.jpg" alt="Константин Кузьмин">
            </div>
            <div class="reviews-body">
              <div class="reviews-name">Константин Кузьмин</div>
              <div class="reviews-profi">Основатель компании LIFECONST</div>
              <div class="reviews-comment">Я был очень впечатлен результатом которую заказывал. Компания Construction реализовала все мои ожидания!</div>
              <div class="reviews-social">
                <a href="#"><img src="@/assets/social-vk-gray.svg" alt="Вконтакте"></a>
                <a href="#"><img src="@/assets/social-facebook-gray.svg" alt="Facebook"></a>
                <a href="#"><img src="@/assets/social-telegram-gray.svg" alt="Telegram"></a>
              </div>
            </div>
          </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="reviews-item">
            <div class="reviews-thumb">
              <img src="@/assets/client-2.jpg" alt="Ракеш Джаггернаут">
            </div>
            <div class="reviews-body">
              <div class="reviews-name">Ракеш Джаггернаут</div>
              <div class="reviews-profi">Директор торгового центра BRUK</div>
              <div class="reviews-comment">Заказывал проектирование для нашего здания. Результатом очень доволен. Компания ответственно относится к своим клиентам</div>
              <div class="reviews-social">
                <a href="#"><img src="@/assets/social-vk-gray.svg" alt="Вконтакте"></a>
                <a href="#"><img src="@/assets/social-facebook-gray.svg" alt="Facebook"></a>
                <a href="#"><img src="@/assets/social-telegram-gray.svg" alt="Telegram"></a>
              </div>
            </div>
          </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="reviews-item">
            <div class="reviews-thumb">
              <img src="@/assets/client-3.jpg" alt="Забава Лукия">
            </div>
            <div class="reviews-body">
              <div class="reviews-name">Забава Лукия</div>
              <div class="reviews-profi">Коммерческий директор MAGNUM</div>
              <div class="reviews-comment">Хотела сделать ремонт для моего офиса. Заказала услугу ремонт по дому. Ребята сопровождали от начала и до конца. Рекомендую!</div>
              <div class="reviews-social">
                <a href="#"><img src="@/assets/social-vk-gray.svg" alt="Вконтакте"></a>
                <a href="#"><img src="@/assets/social-facebook-gray.svg" alt="Facebook"></a>
                <a href="#"><img src="@/assets/social-telegram-gray.svg" alt="Telegram"></a>
              </div>
            </div>
          </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="reviews-item">
            <div class="reviews-thumb">
              <img src="@/assets/client-4.jpg" alt="Константин Кузьмин">
            </div>
            <div class="reviews-body">
              <div class="reviews-name">Константин Кузьмин</div>
              <div class="reviews-profi">Основатель компании LIFECONST</div>
              <div class="reviews-comment">Я был очень впечатлен результатом которую заказывал. Компания Construction реализовала все мои ожидания!</div>
              <div class="reviews-social">
                <a href="#"><img src="@/assets/social-vk-gray.svg" alt="Вконтакте"></a>
                <a href="#"><img src="@/assets/social-facebook-gray.svg" alt="Facebook"></a>
                <a href="#"><img src="@/assets/social-telegram-gray.svg" alt="Telegram"></a>
              </div>
            </div>
          </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="reviews-item">
            <div class="reviews-thumb">
              <img src="@/assets/client-5.jpg" alt="Константин Кузьмин">
            </div>
            <div class="reviews-body">
              <div class="reviews-name">Константин Кузьмин</div>
              <div class="reviews-profi">Основатель компании LIFECONST</div>
              <div class="reviews-comment">Я был очень впечатлен результатом которую заказывал. Компания Construction реализовала все мои ожидания!</div>
              <div class="reviews-social">
                <a href="#"><img src="@/assets/social-vk-gray.svg" alt="Вконтакте"></a>
                <a href="#"><img src="@/assets/social-facebook-gray.svg" alt="Facebook"></a>
                <a href="#"><img src="@/assets/social-telegram-gray.svg" alt="Telegram"></a>
              </div>
            </div>
          </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="reviews-item">
            <div class="reviews-thumb">
              <img src="@/assets/client-6.jpg" alt="Константин Кузьмин">
            </div>
            <div class="reviews-body">
              <div class="reviews-name">Константин Кузьмин</div>
              <div class="reviews-profi">Основатель компании LIFECONST</div>
              <div class="reviews-comment">Я был очень впечатлен результатом которую заказывал. Компания Construction реализовала все мои ожидания!</div>
              <div class="reviews-social">
                <a href="#"><img src="@/assets/social-vk-gray.svg" alt="Вконтакте"></a>
                <a href="#"><img src="@/assets/social-facebook-gray.svg" alt="Facebook"></a>
                <a href="#"><img src="@/assets/social-telegram-gray.svg" alt="Telegram"></a>
              </div>
            </div>
          </div>
          </swiper-slide>

      </swiper>

<!--      <div class="swiper reviews-swiper">

        <div class="swiper-wrapper">

          <div class="swiper-slide">
            <div class="reviews-item">
              <div class="reviews-thumb">
                <img src="@/assets/client-1.jpg" alt="Константин Кузьмин">
              </div>
              <div class="reviews-body">
                <div class="reviews-name">Константин Кузьмин</div>
                <div class="reviews-profi">Основатель компании LIFECONST</div>
                <div class="reviews-comment">Я был очень впечатлен результатом которую заказывал. Компания Construction реализовала все мои ожидания!</div>
                <div class="reviews-social">
                  <a href="#"><img src="@/assets/social-vk-gray.svg" alt="Вконтакте"></a>
                  <a href="#"><img src="@/assets/social-facebook-gray.svg" alt="Facebook"></a>
                  <a href="#"><img src="@/assets/social-telegram-gray.svg" alt="Telegram"></a>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="reviews-item">
              <div class="reviews-thumb">
                <img src="@/assets/client-2.jpg" alt="Ракеш Джаггернаут">
              </div>
              <div class="reviews-body">
                <div class="reviews-name">Ракеш Джаггернаут</div>
                <div class="reviews-profi">Директор торгового центра BRUK</div>
                <div class="reviews-comment">Заказывал проектирование для нашего здания. Результатом очень доволен. Компания ответственно относится к своим клиентам</div>
                <div class="reviews-social">
                  <a href="#"><img src="@/assets/social-vk-gray.svg" alt="Вконтакте"></a>
                  <a href="#"><img src="@/assets/social-facebook-gray.svg" alt="Facebook"></a>
                  <a href="#"><img src="@/assets/social-telegram-gray.svg" alt="Telegram"></a>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="reviews-item">
              <div class="reviews-thumb">
                <img src="@/assets/client-3.jpg" alt="Забава Лукия">
              </div>
              <div class="reviews-body">
                <div class="reviews-name">Забава Лукия</div>
                <div class="reviews-profi">Коммерческий директор MAGNUM</div>
                <div class="reviews-comment">Хотела сделать ремонт для моего офиса. Заказала услугу ремонт по дому. Ребята сопровождали от начала и до конца. Рекомендую!</div>
                <div class="reviews-social">
                  <a href="#"><img src="@/assets/social-vk-gray.svg" alt="Вконтакте"></a>
                  <a href="#"><img src="@/assets/social-facebook-gray.svg" alt="Facebook"></a>
                  <a href="#"><img src="@/assets/social-telegram-gray.svg" alt="Telegram"></a>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="reviews-item">
              <div class="reviews-thumb">
                <img src="@/assets/client-4.jpg" alt="Константин Кузьмин">
              </div>
              <div class="reviews-body">
                <div class="reviews-name">Константин Кузьмин</div>
                <div class="reviews-profi">Основатель компании LIFECONST</div>
                <div class="reviews-comment">Я был очень впечатлен результатом которую заказывал. Компания Construction реализовала все мои ожидания!</div>
                <div class="reviews-social">
                  <a href="#"><img src="@/assets/social-vk-gray.svg" alt="Вконтакте"></a>
                  <a href="#"><img src="@/assets/social-facebook-gray.svg" alt="Facebook"></a>
                  <a href="#"><img src="@/assets/social-telegram-gray.svg" alt="Telegram"></a>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="reviews-item">
              <div class="reviews-thumb">
                <img src="@/assets/client-5.jpg" alt="Константин Кузьмин">
              </div>
              <div class="reviews-body">
                <div class="reviews-name">Константин Кузьмин</div>
                <div class="reviews-profi">Основатель компании LIFECONST</div>
                <div class="reviews-comment">Я был очень впечатлен результатом которую заказывал. Компания Construction реализовала все мои ожидания!</div>
                <div class="reviews-social">
                  <a href="#"><img src="@/assets/social-vk-gray.svg" alt="Вконтакте"></a>
                  <a href="#"><img src="@/assets/social-facebook-gray.svg" alt="Facebook"></a>
                  <a href="#"><img src="@/assets/social-telegram-gray.svg" alt="Telegram"></a>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="reviews-item">
              <div class="reviews-thumb">
                <img src="@/assets/client-6.jpg" alt="Константин Кузьмин">
              </div>
              <div class="reviews-body">
                <div class="reviews-name">Константин Кузьмин</div>
                <div class="reviews-profi">Основатель компании LIFECONST</div>
                <div class="reviews-comment">Я был очень впечатлен результатом которую заказывал. Компания Construction реализовала все мои ожидания!</div>
                <div class="reviews-social">
                  <a href="#"><img src="@/assets/social-vk-gray.svg" alt="Вконтакте"></a>
                  <a href="#"><img src="@/assets/social-facebook-gray.svg" alt="Facebook"></a>
                  <a href="#"><img src="@/assets/social-telegram-gray.svg" alt="Telegram"></a>
                </div>
              </div>
            </div>
          </div>


        </div>

        <div class="swiper-pagination"></div>

      </div>-->

    </div>


  </section>

  <section class="s-partners" id="s-partners">

      <div class="partners-row">
        <div class="partners-item"><img src="@/assets/partner-1.svg" alt="Partner 1"></div>
        <div class="partners-item"><img src="@/assets/partner-2.svg" alt="Partner 2"></div>
        <div class="partners-item"><img src="@/assets/partner-3.svg" alt="Partner 3"></div>
        <div class="partners-item"><img src="@/assets/partner-4.svg" alt="Partner 4"></div>
        <div class="partners-item"><img src="@/assets/partner-5.svg" alt="Partner 5"></div>
        <div class="partners-item"><img src="@/assets/partner-1.svg" alt="Partner 1"></div>
        <div class="partners-item"><img src="@/assets/partner-2.svg" alt="Partner 2"></div>
        <div class="partners-item"><img src="@/assets/partner-3.svg" alt="Partner 3"></div>
        <div class="partners-item"><img src="@/assets/partner-4.svg" alt="Partner 4"></div>
        <div class="partners-item"><img src="@/assets/partner-5.svg" alt="Partner 5"></div>
      </div>

  </section>

  <section class="s-form" id="s-form">
    <div class="container">
      <div class="form-row">
        <div class="form-left">
          <h2 class="def-title">Остались вопросы?</h2>
          <div class="def-desc">Если у Вас остались вопросы или Вы хотите заказать у нас наши услуги то заполните форму справа. Наши менеджера работают круглосуточно и перезвонят Вам в течении дня.</div>
          <div class="form-image">
            <img src="@/assets/form-bg.jpg" alt="Форма обратной связи">
          </div>
        </div>

        <div class="form-right">
          <form>
            <input type="text" placeholder="Ваше имя*" required>
            <input type="text" placeholder="Ваше телефон*" required>
            <input type="text" placeholder="Ваше email">
            <textarea cols="30" rows="5" placeholder="Комментарий"></textarea>
            <button class="def-btn form-button">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <footer class="site-footer" id="site-footer">
    <div class="container">
      <div class="footer-row">

        <div class="footer-left">
          <div class="footer-logo">
            <a href="#site-header">
              <img src="@/assets/logo-footer.svg" alt="Construction">
            </a>
            </div>
          <div class="footer-desc"><strong>Construction</strong> — это компания, предлагающая полный комплекс услуг по строительному дизайну.</div>
        </div>

        <div class="footer-right">

          <nav class="footer-nav">
            <h5 class="footer-title">Наши услуги</h5>
            <ul>
              <li><a href="#s-services">Строительство домов</a></li>
              <li><a href="#s-services">Ремонт по дому</a></li>
              <li><a href="#s-services">Проектиирование зданий</a></li>
            </ul>
          </nav>

          <div class="footer-nav">
            <h5 class="footer-title">График работы</h5>
            <ul>
              <li>Понедельник: 8:30 - 9:00</li>
              <li>Вторник: 8:00 - 9:00</li>
              <li>Среда: 8:00 - 9:00</li>
              <li>Четверг: 8:30 - 9:00</li>
              <li>Пятница: 10:00 - 4:00</li>
              <li>Суббота: выходной</li>
              <li>Воскресенье: Закрыто</li>
            </ul>
          </div>

          <div class="footer-nav">
            <h5 class="footer-title">Контакты</h5>
              <div class="footer-info-item">
                <div class="footer-info-icon"><img src="@/assets/location-gray.svg" alt="Локация"></div>
                <div class="footer-info-text">ул. Гагарина 5Б г. Сочи</div>
              </div>

              <a href="tel:+7 950 457 5654" class="footer-info-item">
                <div class="footer-info-icon"><img src="@/assets/phone-gray.svg" alt="Телефон"></div>
                <div class="footer-info-text">+7 950 457 5654</div>
              </a>

            <div class="footer-social">
              <a href="https://twitter.com/ConstructToday" target="_blank">
                <img src="@/assets/social-twitter-gray.svg" alt="Twitter">
              </a>
              <a href="https://ru.linkedin.com/company/v.k.-powell-construction-llc" target="_blank">
                <img src="@/assets/social-vk-gray.svg" alt="Вконтакте">
              </a>
              <a href="https://www.facebook.com/constructionfestival/" target="_blank">
                <img src="@/assets/social-facebook-gray.svg" alt="Facebook">
              </a>
              <a href="https://t.me/s/schoolforconstruction" target="_blank">
                <img src="@/assets/social-telegram-gray.svg" alt="Telegram">
              </a>
            </div>

          </div>

        </div>
      </div>

      <div class="footer-copyright">
        <div class="copyright-text">Copyright © 2023 Construction. Все права защищены</div>
      </div>

    </div>
  </footer>

</template>

<script>
import SimpleGallery from './components/SimpleGallery.vue';
import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import { Vue3SlideUpDown } from "vue3-slide-up-down";
import 'swiper/css';
import 'photoswipe/style.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { mapGetters, mapActions } from 'vuex';

export default {


  components: {
    Vue3SlideUpDown,
    VueFinalModal,
    ModalsContainer,
    Swiper,
    SwiperSlide,
    SimpleGallery
  },
  data: () => ({
    showModal: false,
    headerMobile: false,
    galleryShowAll: false,
    showPhrase: 'Показать еще',
  }),
  methods: {
    showMore(){   //method to show more images and change button content
      this.galleryShowAll = !(this.galleryShowAll);
      if(this.showPhrase === 'Показать еще'){
        this.showPhrase = 'Скрыть'
      }else{
        this.showPhrase = 'Показать еще'
      }
    }
  },
  computed: {
    ...mapGetters('images', {imageList: 'all'}), // importing images getter from store
    getImagesPrimary(){
      return (this.imageList).slice(0, 6); //array for first 6 showed images
    },
    getImagesAdditional(){
      return (this.imageList).slice(6);  //array for rest images
    }
  },

  setup() {       /* Swiper Slider initialization */
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination]
    };
  },

}
</script>

<style lang="scss">

</style>


