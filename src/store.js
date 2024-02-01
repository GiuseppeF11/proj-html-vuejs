import {reactive} from 'vue';

export const store = reactive({
    items: [
            {
                imgUrl: 'https://demo.hasnaindev.com/animetech/wp-content/uploads/2022/12/meal-time-150x150.webp',
                title: 'The Best Time To Have A Meal',
                date: 'December 26, 2022',
                hour: '05:35',
                categories:'',
            },
            {
                imgUrl: 'https://demo.hasnaindev.com/animetech/wp-content/uploads/2022/12/healthy-foods-150x150.webp',
                title: 'The Best Healty Food',
                date: 'December 26, 2022',
                hour: '05:32',
                categories:'',
            },
            {
                imgUrl: 'https://demo.hasnaindev.com/animetech/wp-content/uploads/2022/12/winter-150x150.webp',
                title: 'The Best Winter Outfits',
                date: 'December 26, 2022',
                hour: '05:29',
                categories:'',
            },
            {
                imgUrl: 'https://demo.hasnaindev.com/animetech/wp-content/uploads/2022/12/rice-ball.webp',
                title: 'Hygenic Receipe To Prepare Rice',
                date: 'December 26, 2022',
                hour: '05:37',
                categories:'',
            },
        ]
});