import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class OdslusaniPredmeti extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = 
        {
            predmeti : []
        }
    }

    dohvatiPredmete()
    {
        /*
        axios.get("urlapija/id="+this.props.idStudenta).then(
            res => {
                this.setState({predmeti : res.data});//Eventualno promjeniti ako bude drugi format podataka
            }
        )*/
        var dummyLista = ["Inženjerska matematika 1", "Linearna algebra i geometrija", "Osnove elektrotehnike"];
        this.setState({predmeti : dummyLista});

    }
    componentDidMount()
    {
        this.dohvatiPredmete();
    }


    render() {
        return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default OdslusaniPredmeti;