<template>

    <div>

        pdf viewer goes here

    </div>

</template>

<script>

    import pdfjsLib from 'pdfjs-dist'

    export default {
        props: {
            file: {
                required: false,
                type: String,
                default: false
            }
        },
        mounted() {
            this.getDoc()
        },
        data() {
            return {
                pdf: null
            }
        },
        watch: {
            pdf: {
                handler: function(val) {
                    console.info('this.pdf updated')
                    console.info({
                        pdf: val
                    })
                }
            }
        },
        methods: {
            getDoc() {
                console.info('getting pdf')
                this.pdf = pdfjsLib.getDocument('/docs/demo-ccd.pdf')
            }
        }
    }
</script>