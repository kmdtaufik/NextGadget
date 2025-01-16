module.exports = {
    content: ['*.html'],
    theme: {
        extend: {
            colors: {
                purple: {
                    500: '#A53DFF'
                }
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif']
            },
            container: {
                center: true,
                padding: '1rem',
                screens: {
                    sm: '600px',
                    md: '728px',
                    lg: '984px',
                    xl: '1240px',
                    '2xl': '1280px',
                }
            }
        },
    },
    plugins: [],
}
