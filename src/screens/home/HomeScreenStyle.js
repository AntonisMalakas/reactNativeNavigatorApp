import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    content: {
        flex: 1
    },
    footer: {
        backgroundColor: 'red'
    },
    textViewStyle: {
        alignItems: 'center'
    },
    textStyle: {
        color: 'black',
        textAlign: 'center'
    },
    scrollView: { flex: 1, backgroundColor: '#FFFFFF', marginTop: 25 },
    sliderBox: { width: '97%', borderRadius: 10, marginTop: 5, borderWidth: 1, borderColor: '#FFFFFF' },
    sectiosnsView: {
        marginTop: 15,
        paddingHorizontal: 10
    },
    categoryFlatListView: { justifyContent: 'center', alignItems: 'center' },
    categoryFlatListButton: { backgroundColor: '#F67882', shadowRadius: 8, shadowColor: 'black', borderRadius: 5, marginRight: 17, justifyContent: 'center', alignItems: 'center' },
    categoryFlatLisText: { textAlign: 'center', color: '#FFFFFF', marginHorizontal: 10, fontWeight: '900' },

    sectionText: { fontSize: 22, fontWeight: 'bold' },
    flatListCard: { height: 200, width: 200, borderRadius: 15, marginRight: 10, flex: 1 },
    cardItemHeader: { flex: 1 },
    cardItemTitle: { fontWeight: 'bold' },
    cardItemBody: { flex: 4, justifyContent: 'center', alignItems: 'center' },
    cardItemBodyImage: { height: '100%', width: 200, borderRadius: 5, backgroundColor: 'yellow' },
    cardItemFooter: { flex: 1 },
    cardItemFooterLeftIcon: { marginRight: 5, fontSize: 22, color: 'red' },


})
