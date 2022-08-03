
module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    fontSize: {
      xs:['12px', {
        lineHeight: '18px',
      }],
      sm: ['14px', {
        lineHeight: '21px',
      }],
      base:['16px', {
        lineHeight: '24px',
      }],
      lg:['18px', {
        lineHeight: '27px',
      }],
      xl:['20x', {
        lineHeight: '30px',
      }],
      '2xl':['24px', {
        lineHeight: '36px',
      }],
      '3xl':['30px', {
        lineHeight: '45px',
      }],
      '5xl':['48px', {
        lineHeight: '72px',
      }],
      '6xl':['60px', {
        lineHeight: '90px',
      }],
      '7xl':['72px', {
        lineHeight: '108px',
      }],
      '8xl':['14px', {
        lineHeight: '21px',
      }],
      '9xl':['128px', {
        lineHeight: '192px',
      }],
    },
    extend: {
      colors:{
        primary:{
          DEFAULT:'#AA0601',
          light:'#FBF2F2',
          dark:'#650300'
        },
        secondary:{
          DEFAULT:'#B4F5FA'
        },
        productColor:{
          dark:'#5F3E2D',
          brown:'#B75929'
        },
        'darkGary':{
          DEFAULT:'#555555'
        }
      },
      container:{
        center:true,
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}