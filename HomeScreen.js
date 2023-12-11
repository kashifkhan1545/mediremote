import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text, Modal, TextInput, Image, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements';
import { useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-native-elements';



const HomeScreen = ({ route, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshModalVisible, setRefreshModalVisible] = useState(false);
  const [drawerModalVisible, setDrawerModalVisible] = useState(false); // New state for the drawer modal
  const [blueContainerExpanded, setBlueContainerExpanded] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');
  const [checkBoxChecked, setCheckBoxChecked] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [showProfileData, setShowProfileData] = useState(false);
  const [rpmModalVisible, setRpmModalVisible] = useState(false);
  const [rpmData, setRpmData] = useState(null);
  const usernameInitial = route.params?.usernameInitial || '';

  useEffect(() => {
    // Fetch RPM data when the component mounts
    const fetchRpmData = async () => {
      try {
        const response = await axios.get('http://192.168.0.145//ccmform/api/Profile/GetProfile');
        setRpmData(response.data.result);
      } catch (error) {
        console.error('Error fetching RPM data:', error);
      }
    };

    if (rpmModalVisible) {
      fetchRpmData();
    }
  }, [rpmModalVisible]);

  const handleButton1Press = () => {
    setRpmModalVisible(true);
  };

  const closeRpmModal = () => {
    setRpmModalVisible(false);
  };
 
  
  const renderRpmModalContent = () => (
    <Modal transparent={true} visible={rpmModalVisible} onRequestClose={closeRpmModal}>
      <View style={styles.rpmModalContainer}>
        {/* Blue container at the top */}
        <View style={styles.blueContainerInModal}>
          <Text style={styles.blueContainerText}>User Data </Text>
        </View>
  
        {/* White background for the modal content */}
        <ScrollView style={styles.ScrollView}>
          {rpmData &&
            rpmData.map((item) => (
              <Card key={item.profile_ID} containerStyle={styles.rpmCardContainer}>
                <Card.Title style={styles.rpmCardTitle}>Profile ID: {item.profile_ID}</Card.Title>
                <Card.Divider />
                <View style={styles.rpmCardContent}>
                  <View style={styles.rpmCardRow}>
                    <Text style={styles.rpmCardLabel}>Name:</Text>
                    <Text style={styles.rpmCardText}>{item.p_Name}</Text>
                  </View>
                  <View style={styles.rpmCardRow}>
                    <Text style={styles.rpmCardLabel}>Email:</Text>
                    <Text style={styles.rpmCardText}>{item.p_Email}</Text>
                  </View>
                  <View style={styles.rpmCardRow}>
                    <Text style={styles.rpmCardLabel}>Gender:</Text>
                    <Text style={styles.rpmCardText}>{item.p_Gender}</Text>
                  </View>
                  <View style={styles.rpmCardRow}>
                    <Text style={styles.rpmCardLabel}>DOB:</Text>
                    <Text style={styles.rpmCardText}>{item.p_DOB}</Text>
                  </View>
                  {/* Add more rows for other profile properties */}
                </View>
              </Card>
            ))}
        </ScrollView>
  
        {/* Close button at the bottom */}
        <TouchableOpacity onPress={closeRpmModal} style={styles.closeRpmModalButton}>
          <Text style={styles.closeRpmModalText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
  
  

  useEffect(() => {
    // Fetch profile data when the component mounts, but don't show it by default
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.0.145//ccmform/api/Profile/GetProfile');
        setProfileData(response.data.result);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchData();
    setShowProfileData(false); // Set showProfileData to false by default
  }, []); // Empty dependency array ensures this effect runs only once on mount



  const handleButton5Press = () => {
    setShowProfileData(!showProfileData); // Toggle the state
  };;

  const handleRefresh = () => {
    setRefreshModalVisible(true);
  };

  const handleBellIcon = () => {
    // Add your logic for handling bell icon press here
  };

  const handleUsernamePress = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setRefreshModalVisible(false);
  };

  const handleAccountPress = () => {
    // Add your logic for Account here
  };

  const handleLogoutPress = () => {
    navigation.navigate('Login');
    // Add your logic for Logout here
  };
  const handleDropDownPress = () => {
    setBlueContainerExpanded(!blueContainerExpanded);
  };
  const handleAnotherRefresh = () => {

  };

  const handleDrawerItemPress1 = () => {

  };
  const handleDrawerItemPress2 = () => {

  };
  const handleDrawerItemPress3 = () => {

  };
  const handleDrawerItemPress4 = () => {

  };
  const handleDrawerItemPress5 = () => {

  };
  const handleDrawerItemPress6 = () => {

  };
  const handleDrawerItemPress7 = () => {

  };
  const handleDrawerItemPress8 = () => {

  };
  const handleDrawerItemPress9 = () => {

  };
  const handleDrawerItemPress10 = () => {

  };
  const handleDrawerItemPress11 = () => {
    navigation.navigate('Login');
  };
  const handleBars = () => {
    setDrawerModalVisible(true);
  };

  const closeDrawerModal = () => {
    setDrawerModalVisible(false);
  };
  
  const handleButton2Press = () => {

  };
  const handleButton3Press = () => {

  };
  const handleButton4Press = () => {

  };



  const handleButton6Press = () => {

  };
  const handleButton7Press = () => {

  };
  const renderDrawerModalContent = () => (
    <View style={styles.drawerModalContainer}>
      {/* Close button icon on the right */}
      <TouchableOpacity onPress={closeDrawerModal} style={styles.closeDrawerButton}>
        <Icon name="bars" size={25} color="white" />
      </TouchableOpacity>

      {/* Place your logo image here */}
      <Image source={require('./logo.png')} style={styles.drawerTopImage} />

      <View style={styles.drawerModalContent}>
        <TouchableOpacity onPress={handleDrawerItemPress1} style={styles.drawerModalItem}>
          <Icon name="dashboard" size={20} color="white" style={styles.drawerModalIcon} />
          <Text style={styles.drawerModalText}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleDrawerItemPress2} style={styles.drawerModalItem}>
          <Icon name="desktop" size={20} color="white" style={styles.drawerModalIcon} />
          <Text style={styles.drawerModalText}>Work Space</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleDrawerItemPress3} style={styles.drawerModalItem}>
          <Icon name="bed" size={20} color="white" style={styles.drawerModalIcon} />
          <Text style={styles.drawerModalText}>Patients</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleDrawerItemPress4} style={styles.drawerModalItem}>
          <Icon name="hospital-o" size={20} color="white" style={styles.drawerModalIcon} />
          <Text style={styles.drawerModalText}>Visits</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleDrawerItemPress5} style={styles.drawerModalItem}>
          <Icon name="bar-chart" size={20} color="white" style={styles.drawerModalIcon} />
          <Text style={styles.drawerModalText}>Readings</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleDrawerItemPress6} style={styles.drawerModalItem}>
          <Icon name="file-text" size={20} color="white" style={styles.drawerModalIcon} />
          <Text style={styles.drawerModalText}>Reports</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleDrawerItemPress7} style={styles.drawerModalItem}>
          <Icon name="bell" size={20} color="white" style={styles.drawerModalIcon} />
          <Text style={styles.drawerModalText}>Notifications</Text>
        </TouchableOpacity>
         
        <View style={{ borderTopWidth: 1, borderTopColor: 'white', marginVertical: 8, width: '98%' }} />
        {/* Add more items as needed */}
        <TouchableOpacity onPress={handleDrawerItemPress8} style={styles.drawerModalItem}>
          <Icon name="user-md" size={20} color="white" style={styles.drawerModalIcon} />
          <Text style={styles.drawerModalText}>ServiceProvider</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDrawerItemPress9} style={styles.drawerModalItem}>
          <Icon name="group" size={20} color="white" style={styles.drawerModalIcon} />
          <Text style={styles.drawerModalText}>Users</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDrawerItemPress10} style={styles.drawerModalItem}>
          <Icon name="user" size={20} color="white" style={styles.drawerModalIcon} />
          <Text style={styles.drawerModalText}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDrawerItemPress11} style={styles.drawerModalItem}>
          <Icon name="sign-out" size={20} color="white" style={styles.drawerModalIcon} />
          <Text style={styles.drawerModalText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  const renderRefreshModalContent = () => (
    <View style={styles.centeredModalContainer}>
      <View style={styles.centeredModalContent}>
        {/* Header with blue background */}
        <View style={styles.modalHeader}>
          <Text style={styles.modalHeaderText}>Select Practice</Text>
        </View>

        {/* Search bar in centered modal */}
        <View style={styles.centeredModalSearchBarContainer}>
          <Icon name="search" size={21} color="black" style={{ marginLeft: 2, marginBottom: 2, }} />
          <TextInput
            style={[styles.searchInput, { fontSize: 14 }]}
            placeholder="Search Practice"
          />
        </View>

        {/* Additional Text Components */}
        <TouchableOpacity onPress={handleAdditionalTextPress}>
          <Text style={styles.additionalText}>1- MediRemote</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAdditionalTextPress}>
          <Text style={styles.additionalText}>2- Test Practical</Text>
        </TouchableOpacity>

        {/* Cancel button */}
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={handleModalClose}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const handleAdditionalTextPress = () => {
    // Add your logic for handling additional text press here
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Container */}
      <View style={styles.transparentContainer}>
        {/* Left side */}
        <TouchableOpacity onPress={handleBars}>
          <Icon name="bars" size={25} color="black" />
        </TouchableOpacity>

        {/* Right side */}
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={handleRefresh}>
            <Icon name="refresh" size={25} color="black" style={styles.icon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleBellIcon}>
            <Icon name="bell" size={25} color="black" style={styles.icon} />
          </TouchableOpacity>

          {usernameInitial ? (
            <TouchableOpacity onPress={handleUsernamePress}>
              <View style={styles.usernameInitialContainer}>
                <Text style={styles.usernameInitial}>{usernameInitial}</Text>
              </View>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>

      <View style={styles.border} />

      {/* Blue Container with Search Bar */}
      <View style={styles.blueContainer}>
        {/* Search bar */}
        <View style={styles.searchBarContainer}>
          <Icon name="search" size={21} color="grey" style={{ marginLeft: 2, marginBottom: 2, }} />
          <TextInput
            style={[styles.searchInput, { fontSize: 13 }]}
            placeholder="Search by Name, Email, Phone"
          />

        </View>
        <TouchableOpacity onPress={handleDropDownPress} style={styles.dropDownIconContainer}>
          <Icon name="caret-down" size={25} color="white" />
        </TouchableOpacity>
        {/* blueContainerExpanded */}
        {blueContainerExpanded && (
          <View style={styles.extendedContentContainer}>
            <TextInput
              style={styles.extendedContentInput}
              placeholderTextColor="white"
              placeholder="Service Provider"
              value={textInputValue}
              onChangeText={(text) => setTextInputValue(text)}
            />
            {/* CheckBox and Text */}
            <View style={styles.checkBoxContainer}>
              <CheckBox

                checked={checkBoxChecked}
                onPress={() => setCheckBoxChecked(!checkBoxChecked)}
                containerStyle={styles.checkBox}
              />
              <Text style={styles.checkBoxText}>Is Last Reading Critical?</Text>
            </View>
            {/* Another Refresh Icon */}
            <TouchableOpacity onPress={handleAnotherRefresh} style={styles.anotherRefreshIconContainer}>
              <Icon name="refresh" size={25} color="white" style={styles.refreshIcon} />
            </TouchableOpacity>
          </View>

        )}

      </View>

      {/* Transparent Container with Border */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.transparentBorderContainer}>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleButton1Press}>
              <Text style={styles.buttonText}>RPM</Text>
            </TouchableOpacity>
             {/* Render RPM Modal */}
      {renderRpmModalContent()}
            <TouchableOpacity style={styles.button} onPress={handleButton2Press}>
              <Text style={styles.buttonText}>CCM</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleButton3Press}>
              <Text style={styles.buttonText}>PCM</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleButton4Press}>
              <Text style={styles.buttonText}>CCCM</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* second container */}
        <View style={styles.transparentBorderContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleButton5Press}>
              <Text style={styles.buttonText}>Cards</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleButton6Press}>
              <Text style={styles.buttonText}>Smart List</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleButton7Press}>
              <Text style={styles.buttonText}>Table</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* FlatList to display profile information */}
      {showProfileData && profileData && (

        <FlatList
          data={profileData}
          keyExtractor={(item) => item.profile_ID.toString()}
          renderItem={({ item }) => (

            <View style={styles.profileContainer}>
              <View style={styles.profileEnhancedContainer}>
                <View style={styles.profileEnhancedIconContainer}>
                  {/* You can use a user circle icon here */}
                  <Icon name="user-circle" size={30} color="white" style={{ borderRadius: 15 }} />
                </View>
                <View style={styles.profileEnhancedTextContainer}>
                  <Text style={styles.profileEnhancedText}>{item.p_Name}</Text>
                </View>
              </View>
              <View style={styles.profileRow}>
                <Text style={styles.profileHeading}>Email: </Text>
                <Text style={styles.profileText}>{item.p_Email}</Text>
              </View>

              <View style={styles.profileRow}>
                <Text style={styles.profileHeading}>Gender: </Text>
                <Text style={styles.profileText}>{item.p_Gender}</Text>
              </View>

              <View style={styles.profileRow}>
                <Text style={styles.profileHeading}>DOB: </Text>
                <Text style={styles.profileText}>{item.p_DOB}</Text>
              </View>

              <View style={styles.profileRow}>
                <Text style={styles.profileHeading}>City: </Text>
                <Text style={styles.profileText}>{item.p_City}</Text>
              </View>

              <View style={styles.profileRow}>
                <Text style={styles.profileHeading}>State: </Text>
                <Text style={styles.profileText}>{item.p_State}</Text>
              </View>

              <View style={styles.profileRow}>
                <Text style={styles.profileHeading}>Address: </Text>
                <Text style={styles.profileText}>{item.p_Address}</Text>
              </View>

   <View style={styles.profileRow}>
                <Text style={styles.profileHeading}>Zip Code: </Text>
                <Text style={styles.profileText}>{item.p_ZipCode}</Text>
              </View>
              
              {/* Add more Text components for other properties */}
            </View>

          )}
          
        />
      )}
      {/* Refresh Modal */}
      {refreshModalVisible && renderRefreshModalContent()}

      {/* User Account Modal */}
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleModalClose}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={handleAccountPress}>
              <View style={styles.modalItem}>
                <Icon name="user" size={20} color="grey" style={styles.modalIcon} />
                <Text style={styles.modalText}>Account</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogoutPress}>
              <View style={styles.modalItem}>
                <Icon name="sign-out" size={20} color="grey" style={styles.modalIcon} />
                <Text style={styles.modalText}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      {/* Drawer Modal */}
      <Modal
        transparent={true}
        visible={drawerModalVisible}
        onRequestClose={closeDrawerModal}
      // Slide animation for the modal
      >
        {renderDrawerModalContent()}
      </Modal>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  transparentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  icon: {
    marginLeft: 16,
  },
  usernameInitialContainer: {
    backgroundColor: 'grey',
    borderRadius: 80,
    marginLeft: 16,
    padding: 6,

  },
  usernameInitial: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  blueContainer: {
    backgroundColor: '#006291',
    padding: 16,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 12,
    padding: 5,
    marginBottom: 5,
    height: 48,
    width: '88%',
    marginLeft: 8,
    backgroundColor: 'white',
  },
  centeredModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredModalContent: {
    width: 300,
    height: 350,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 730,
  },
  modalHeader: {
    backgroundColor: '#006291',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 16,
    marginVertical: -19.5,
    width: 300,
    marginLeft: -20,
  },
  modalHeaderText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  additionalText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#006291',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  cancelButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  modalContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 200,
    marginTop: 60,
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  closeModalButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
  },
  closeModalText: {
    textAlign: 'right',
  },
  modalContent: {
    padding: 20,
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalIcon: {
    marginRight: 10,
  },
  modalText: {
    fontSize: 18,
  },
  // New style for the search bar in the centered modal
  centeredModalSearchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 12,
    padding: 5,
    marginBottom: 10, // Adjust as needed
    height: 50,
    width: '99%',
    marginLeft: 1.5,
    backgroundColor: 'white', // Change the background color as needed
  },
  dropDownIconContainer: {
    position: 'absolute',
    top: 26, // Adjust as needed
    right: 16, // Adjust as needed
  },
  extendedContentContainer: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 16,
    backgroundColor: '#006291',
    width: '92%',

  },
  extendedContentInput: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 6,
    color: 'white',
    paddingHorizontal: 8,
    marginTop: 20,

  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkBox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginLeft: 30,
  },
  checkBoxText: {
    color: 'white',
    marginRight: 16,
  },
  refreshIconContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  anotherRefreshIconContainer: {
    alignItems: 'center',
    marginTop: 10,
    height: 30,
    width: 30,
    marginLeft: 140,
  },
  refreshIcon: {
    marginTop: 5,
  },

  drawerModalContainer: {
    flex: 1,
    flexDirection: 'column', // Change to 'column'
    backgroundColor: '#1b2330',
    width: '70%', // Adjust as needed
  },
  drawerModalContent: {
    padding: 20,
    alignItems: 'flex-start', // Change to 'flex-start'
  },
  drawerModalItem: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Align items to the left
    marginBottom: 16,
    padding: 7,

  },
  drawerModalIcon: {
    marginRight: 10,
  },
  drawerModalText: {
    fontSize: 18,
    color: 'white',
  },
  drawerTopImage: {
    width: '70%', // Adjust as needed
    height: 51, // Adjust as needed
    resizeMode: 'cover',
    marginLeft: 26,
    marginTop: 8,

  },
  closeDrawerButton: {
    position: 'absolute',
    top: -4,
    right: -2,
    padding: 10,
  },

  transparentBorderContainer: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#ccc', // Adjust the border color as needed
    height: 55, // Adjust the height as needed
    marginHorizontal: 16, // Adjust the margin as needed
    marginTop: 10,
    borderRadius: 24,
    marginBottom: 50, // Add marginBottom here
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 6,
    height: 40,

  },

  button: {
    backgroundColor: '#006291',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',

  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',

  },
  profileContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    width: '94%',
    marginLeft: 10,
  },
  profileHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',

  },
  profileRow: {
    flexDirection: 'row',

  },
  profileText: {
    fontSize: 16,
    marginBottom: 8,
  },
  profileEnhancedContainer: {
    flexDirection: 'row',
    marginTop: -15,
    backgroundColor: '#006291',
    marginLeft: -10,
    padding: 10,
    alignItems: 'center',
    borderBottomRightRadius: 34,
    marginBottom: 25, // Add a margin bottom to create space between profile items
  },
  profileEnhancedIconContainer: {
    marginRight: 10,

  },
  profileEnhancedTextContainer: {
    flex: 1,
  },
  profileEnhancedText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  rpmModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 160,
    marginBottom: 170,
    width: '90%',
    marginLeft: 20,
    borderRadius: 12,
    borderWidth: 0.2,
  },
  rpmItemContainer: {
    backgroundColor: 'white',
    padding: 16,
    margin: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  
  rpmItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black', // Adjust the color as needed
  },
  closeRpmModalButton: {
    position: 'absolute',
    bottom: 10,
    right: 20, // Adjust the right position as needed
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: -2,
  },
  
  closeRpmModalText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  blueContainerInModal: {
    backgroundColor: '#006291',
    padding: 16,
    width: '100%',
    alignItems: 'center',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  blueContainerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ScrollView:{
marginBottom:80,
  },
  rpmCardContainer: {
    borderRadius: 10,
    marginBottom: 16,
    marginHorizontal: 10,
    padding: 16,
    backgroundColor: '#ffffff', // Set your desired background color
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  rpmCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333', // Set your desired text color
  },
  rpmCardContent: {
    marginTop: 10,
  },
  rpmCardRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  rpmCardLabel: {
    fontWeight: 'bold',
    marginRight: 5,
    color: 'black', // Set your desired label color
  },
  rpmCardText: {
    fontSize: 16,
    color: '#333333', // Set your desired text color
  },
});

export default HomeScreen;
