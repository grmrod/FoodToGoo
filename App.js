import React, {Fragment} from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, }}>
      <ScrollView>
      <View style={{  flexDirection:'row', padding: 10 }}>
          <View style={{ height: 45, width: 45, borderRadius: '50%', backgroundColor: '#AB47BC', justifyContent: 'center', alignItems: 'center' }}>
          <Ionicons name="ios-restaurant-outline" size={24} color="white" />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
            <Text style={{ fontSize: 14, color: 'gray' }}>Welcome to, </Text>
            <Text style={{ fontSize: 16 }}>Sample restaurant</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', padding: 10 }}>
            <Ionicons name="ios-search-outline" size={24} color="black" />
          </View>
        </View>
        <View style={{ flex: 1, padding: 15 }}>
          {/* Discounts & Offers Content*/}
          <View style={{}}>
           <ScrollView style={{
                 flexDirection: 'row',
               }}
               horizontal={true}
               showsHorizontalScrollIndicator={false}>
             <View style={{flex: 1, flexDirection: 'row', borderRadius: 10, backgroundColor: '#8E24AA', marginRight: 10}}>
               <View style={{flex: 1, padding: 20}}>
                 <Text style={{fontSize: 10, color: '#fff', marginBottom: 5}}>20/04 - 06/09</Text>
                 <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold'}}>Special discount</Text>
                 <Text style={{fontSize: 14, color: '#fff', }}>69% of all products</Text>
               </View>
               <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10}}>
                 <Image source={require('./assets/img1.jpeg')} style={{ height: 75, width: 75, borderRadius: '50%', margin: 10}} />
               </View>
             </View>
             <View style={{flex: 1, flexDirection: 'row', borderRadius: 10, backgroundColor: '#5E35B1', marginRight: 10}}>
             <View style={{flex: 1, padding: 20}}>
                 <Text style={{fontSize: 10, color: '#fff', marginBottom: 5}}></Text>
                 <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold'}}>Excelent pricing</Text>
                 <Text style={{fontSize: 14, color: '#fff', }}>On all our products</Text>
               </View>
               <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10}}>
                 <Image source={require('./assets/img2.jpeg')} style={{ height: 75, width: 75, borderRadius: '50%', margin: 10}} />
               </View>
             </View>
             <View style={{flex: 1, flexDirection: 'row', borderRadius: 10, backgroundColor: '#3949AB', marginRight: 10}}>
             <View style={{flex: 1, padding: 20}}>
                 <Text style={{fontSize: 10, color: '#fff', marginBottom: 5}}>20/04 - 06/09</Text>
                 <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold'}}>Great Offers</Text>
                 <Text style={{fontSize: 14, color: '#fff', }}>69% of all products</Text>
               </View>
               <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10}}>
               <Image source={require('./assets/img6.jpeg')} style={{ height: 75, width: 75, borderRadius: '50%', margin: 10}} />
               </View>
             </View>
           </ScrollView>
          </View>
          
          <View style={{ flex: 1 , marginTop: 20}}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Order Now</Text>

              {/* Option Card */}
              <View style={[styles.card, {flex: 0, flexDirection: 'row', marginTop: 10, height: 150}]}>
                {/* Option 1 */}
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10, margin: 5,}}>
                <Ionicons name="ios-car-outline" size={48} color="#6A1B9A" />
                  <Text style={{ fontSize: 18,fontWeight: 'bold' }}>Store pickup</Text>
                  <Text style={{ fontSize: 14, color: 'gray'}}>Best quality</Text>
              </View>
              <View style={{height: 75, width: 2, backgroundColor: '#F3E5F5', alignSelf: 'center', borderRadius: '50%', opacity: 0.5}}></View>
                {/* Option 2 */}
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10, margin: 5, }}>
                  <Ionicons name="ios-cart-outline" size={48} color="#6A1B9A" />
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Delivery</Text>
                  <Text style={{ fontSize: 14, color: 'gray'}}>Always on time</Text>
                </View>
              </View>
          </View>
          <View style={{ flex: 1,marginTop: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Sales & Discounts</Text>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <CardContainer>
                  <CardCover>
                    <Image source={require('./assets/img1.jpeg')} style={{ width: '100%', height: '100%' }} />
                    <Text>Im over here</Text>
                      <DiscountIcon>
                        <Text style={{ color: '#fff', fontWeight: 'bold'}}>20%</Text>
                      </DiscountIcon>
                  </CardCover>
            
                  <View style={{flex: 1, padding: 10}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Discount of all excenta 20% off in all stores</Text>
                    <Text style={{ fontSize: 14, color: 'gray', marginTop: 5}}>20/04/20 - 06/09/2020</Text>
                  </View>
              
                </CardContainer>
              </View>
              <View style={{ flex: 1 }}>
                <CardContainer>
                  <CardCover>
                    
                      <Image source={require('./assets/img6.jpeg')} style={{ width: '100%', height: '100%' }} />
                      
                      <DiscountIcon>
                        <Text style={{ color: '#fff', fontWeight: 'bold'}}>20%</Text>
                      </DiscountIcon>
                  </CardCover>
            
                  <View style={{flex: 1, padding: 10}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Discount of all excenta 20% off in all stores</Text>
                    <Text style={{ fontSize: 14, color: 'gray', marginTop: 5}}>20/04/20 - 06/09/2020</Text>
                  </View>
              
                </CardContainer>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <CardContainer>
                  <CardCover>
                    
                      <Image source={require('./assets/img2.jpeg')} style={{ width: '100%', height: '100%' }} />
                      
                      <DiscountIcon>
                        <Text style={{ color: '#fff', fontWeight: 'bold'}}>20%</Text>
                      </DiscountIcon>
                  </CardCover>
            
                  <View style={{flex: 1, padding: 10}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Discount of all excenta 20% off in all stores</Text>
                    <Text style={{ fontSize: 14, color: 'gray', marginTop: 5}}>20/04/20 - 06/09/2020</Text>
                  </View>
              
                </CardContainer>
              </View>
              <View style={{ flex: 1 }}>
                <CardContainer>
                  <CardCover>
                      <Image source={require('./assets/img3.jpeg')} style={{ width: '100%', height: '100%' }} />
                      <DiscountIcon>
                        <Text style={{ color: '#fff', fontWeight: 'bold'}}>20%</Text>
                      </DiscountIcon>
                  </CardCover>
            
                  <View style={{flex: 1, padding: 10}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Discount of all excenta 20% off in all stores</Text>
                    <Text style={{ fontSize: 14, color: 'gray', marginTop: 5}}>20/04/20 - 06/09/2020</Text>
                  </View>
              
                </CardContainer>
              </View>
            </View>
            

            
            {/* <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
              <View style={styles.card}><Text>Card 1</Text></View>
              </View>
              <View style={{ flex: 1 }}>
                <View style={styles.card}><Text>Card 2</Text></View>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <View style={styles.card}><Text>Card 3</Text></View>
              </View>
              <View style={{ flex: 1 }}>
                <View style={styles.card}><Text>Card 4</Text></View>
              </View>
            </View> */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function OrdersScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Orders!</Text>
    </View>
  ); 
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  ); 
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
    <StatusBar />
    <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName =  'ios-home-outline';
            };
            if (route.name === 'Orders') {
              iconName =  'ios-list-outline';
            };
            if (route.name === 'Settings') {
              iconName =  'ios-settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#7E57C2',
          tabBarInactiveTintColor: 'gray',
        })}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Orders" component={OrdersScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
      </NavigationContainer>
    </>
    
  );
}

const HomeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.View`
  flex: 1;
  border-radius: 14px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.15);
`;

const CardCover = styled.View`
  flex: 1;
   height: 150px;
   margin: 5px;
   border-radius: 10px;
   border-top-left-radius: 14px;
   border-top-right-radius: 14px;
   overflow: hidden;
`;

const DiscountIcon = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-color: #9c27b0;
  align-self: flex-end;
  margin: 20px;
`;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    flex: 1,
    padding: 10,
    elevation: 2,
    borderRadius: 10,
    shadowColor: 'gray',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    margin: 5,
    backgroundColor: '#fff',
  }
});

  
 const Cover = styled.View`
    width: 100%;
    height: 200px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    overflow: hidden;
 `;
  
 const CoverImage = styled.Image`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
 `;
  
 const ContentTitle = styled.Text`
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
    margin-left: 20px;
    width: 170px;
 `;
  
 const Container = styled.View`
  flex: 1;
  background: #EEEEEE;
 `;
  
 const Content = styled.View`
  flex: 1;
 `;
  
 const ProfileContainer = styled.View`
  flex: 1;
  background-color: '#AB47BC';
 `;
  
 const Header = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 10px;
 `;
  
 const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
 `;
  
 const Username = styled.Text`
  font-size: 14px;
  color: gray;
  font-style: italic;
  font-weight: bold;
 `;
  
 const Title = styled.Text`
  font-size: 16px;
  color: #B0BEC5;
  font-weight: 500;
 `;
  
 const Name = styled.Text`
  font-size: 16px;
  color: #3c4560;
  font-weight: bold;
 `;
  
 const SectionHeading = styled.Text`
 font-size: 20px;
 color: #000;
 font-weight: bold;
 margin-left: 20px;
 `;
