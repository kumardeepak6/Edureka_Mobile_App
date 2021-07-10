import React,{useEffect} from 'react'
import { ScrollView, View,Text,Image,StyleSheet, Button, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import {fetchLatestMovies} from '../Actions/LatestMoviesActions'


 function LatestMovies({latestMoviesData,fetchLatestMovies,navigation}) {
   useEffect(()=>{
       fetchLatestMovies()
   },[])

   const Separator = () => (
    <View style={styles.separator} />
  );

   return latestMoviesData.loading ?(
       <Text>Loading...</Text>
       ): latestMoviesData.error ? (
           <Text>Error...</Text>
       ): (    
        <ScrollView>
            <View>
              {
                  
                  latestMoviesData && latestMoviesData.latestMoviesPreducer && latestMoviesData.latestMoviesPreducer.items &&  
                  latestMoviesData.latestMoviesPreducer.items.map((item,key)=>{
                    
                    return (
                        <ScrollView>
                        <View styles={styles.listItem}key={key}>
                        <Image source={{uri:item.imageUrl}} style={styles.placeImage}/>
                        <Text styles={styles.textval}>
                            {item.name}
                        </Text>
                        <View>
                        <Button styles={styles.button}
                            title='Detail View'
                            color= '#F06292'
                            onPress={() => navigation.navigate('MovieDetail', {
                                _id:item._id,
                                
                            })}>
                            
                        </Button>
                        </View>
                                                
                        <Separator />
                        </View>
                        </ScrollView>
                    )

                })
              }
            </View>
       </ScrollView>
    )
}


const mapStateToProps = (state) =>
  ({
    latestMoviesData:state
    
})


const mapDispatchToProps = disptach=> {
  return {
      fetchLatestMovies:()=>disptach(fetchLatestMovies())
  }   
}

export default connect(mapStateToProps, mapDispatchToProps)(LatestMovies)



const styles = StyleSheet.create({
    listContainer:{
        width:"80%"
      },
    listItem:{
        width:"100%",
        padding:20,
        marginTop:3,
        color:'#191970',
        backgroundColor: '#eee',
        alignSelf:'stretch',
    },
    placeImage:{
        marginRight:8,
        height:200
    },
    textval:{
        textAlign:'center',
        fontSize:30
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#f4511e',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
      },
      button: {
        alignItems: "center",
        backgroundColor: "#f4511e",
        paddingBottom: 10,
        fontSize:14,
        fontFamily:"Calibiri"
      },
      fixToText: {
        textAlign:'center',
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: 'row'
        
      },
      button2: {
        height: 50,
        width: 120,
        backgroundColor: 'f4511e',
        borderRadius: 8
      },
})
