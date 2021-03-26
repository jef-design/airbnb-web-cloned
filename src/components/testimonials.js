import React from 'react'
import Card from './Card'


function testimonials(props) {
    return (
        <section className="testimonial_section helper_container">
            <header>
                <h1>
                What guests are saying about homes in Philippines
                </h1>
                <p>
                Over 1,000,000 guest reviews with an average of 4.7 out of 5 stars
                </p>
            </header>
            <div className="slider">
            <div className="wrapper">
                <Card guestrent="https://a0.muscache.com/im/pictures/5fadac13-4083-4574-b981-8f069985bb66.jpg?im_w=480" guestname="Jailyn" guestpic="https://a0.muscache.com/im/pictures/user/161e25a1-449a-4d4e-9547-40e24c75a9f6.jpg?aki_policy=profile_medium" 
                 country="Philippines" message=" 'Me, my boyfriend, and his father from New Zealand enjoyed the stay at Karen's place. Karen and Eric were very hospitable and warm! They are very kind and took"/>
                
                <Card guestrent="https://a0.muscache.com/im/pictures/c7a04f9c-440e-4ba8-ba17-660c2416c2f2.jpg?im_w=480" guestname="Jailyn" guestname="Anchelle"  guestpic="https://a0.muscache.com/im/pictures/user/98095922-e53d-4648-81cf-dd7c76553a2c.jpg?aki_policy=profile_medium&e:fwebp-c100" 
                country="Philippines" message=" 'Simply the best place place to stay whether it's only for an overnight to catch a ride to your next destination or to explore and experience Puerto Princesa for a longer period."/>

                <Card guestrent="https://a0.muscache.com/im/pictures/7e94a7b2-8b53-40b2-b3ce-ba952db18b5c.jpg?im_w=480" guestname="Crystal" guestpic="https://a0.muscache.com/im/pictures/user/fef9e200-1480-492c-9f8e-42117e46324a.jpg?aki_policy=profile_medium&e:fwebp-c100"
                country="Philippines" message=" 'We stayed at Andrea's place on Nov17-20,2015.  This is my first Air BnB booking and I can say that it was positive- thanks to Andrea.  She initially helped me navigate the Air BNb"/>

            </div>
            </div>
        </section>
    )
}

export default testimonials
