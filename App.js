import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Button,
  Image,
  View,
  Linking,
  FlatList,
  InlineImage
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

/* Colors
#587DC0 - Pale Blue
#1E3C73 - Dark Blue
#C09F58 - Gold
*/

class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.image}>
          <Image source={require('assets/logo.png')} style={styles.logo} />
        </View>
        <Text style={styles.head_title}> Music Theory </Text>

        <View>
          <Text
            onPress={() => this.props.navigation.navigate('Staff')}
            style={styles.section}>
            Staff
          </Text>
        </View>

        <View>
          <Text
            onPress={() => this.props.navigation.navigate('Clef')}
            style={styles.section}>
            Clef
          </Text>
        </View>

        <View>
          <Text
            onPress={() => this.props.navigation.navigate('Treble')}
            style={styles.section}>
            Treble
          </Text>
        </View>

        <View>
          <Text
            onPress={() => this.props.navigation.navigate('Bass')}
            style={styles.section}>
            Bass
          </Text>
        </View>

        <View>
          <Text
            title="Rhythm"
            onPress={() => this.props.navigation.navigate('Rhythm')}
            style={styles.section}>
            Rhythm
          </Text>
        </View>

        <View>
          <Text
            title="Notes"
            onPress={() => this.props.navigation.navigate('Notes')}
            style={styles.section}>
            Notes
          </Text>
        </View>

        <View>
          <Text
            title="Measures"
            onPress={() => this.props.navigation.navigate('Measures')}
            style={styles.section}>
            Measures
          </Text>
        </View>

        <View>
          <Text
            title="Time Signatures"
            onPress={() => this.props.navigation.navigate('TimeSig')}
            style={styles.section}>
            Time Signatures
          </Text>
        </View>

        <View>
          <Text
            title="Solfege"
            onPress={() => this.props.navigation.navigate('Solfege')}
            style={styles.section}>
            Solfege
          </Text>
        </View>

        <View>
          <Text
            title="Scales"
            onPress={() => this.props.navigation.navigate('Scales')}
            style={styles.section}>
            Scales
          </Text>
        </View>

        <View>
          <Text
            title="Triads"
            onPress={() => this.props.navigation.navigate('Triads')}
            style={styles.section}>
            Triads
          </Text>
        </View>

        <View>
          <Text
            style={styles.section}
            onPress={() => this.props.navigation.navigate('More')}>
            More...
          </Text>
        </View>
      </ScrollView>
    );
  }
}

class StaffScreen extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.title}>Staff</Text>
        <View style={styles.image}>
          <Image source={require('assets/staff.png')} style={styles.img}/>
        </View>
        <FlatList
        data = {[
          {key: 'Now you may be thinking: why are there lines in front of me and what does this have to do with music?'},
          {key: 'But understanding this is vital to understanding music theory'},
          {key: 'A staff is a set 5 horizontal lines consisting of 4 spaces in between them'},
          {key: 'Each line represents a different musical pitch'},
          {key: 'The higher/lower a note is on a staff, the higher/lower the pitch is'},
          {key: 'If a pitches is above or below the staff, ledger lines are included to show the extension of the staff'}
          ]}
          renderItem={({item}) => <Text style={styles.content}>{`\u2022 ${item.key}`}</Text>}
          />

        <Button
        title="Go to next section: Clefs"
        color="#1E3C73"
        onPress={() => this.props.navigation.navigate('Clef')}
        />
        <Button
          title="Home"
          color="#1E3C73"
          onPress={() =>
            this.props.navigation.navigate('Home', {
              mostRecent: 'Staff',
            })}
        />
      </View>
    );
  }
}

class ClefScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.screen}>
        <Text style={styles.title}>Clef</Text>
        <View style={styles.image}>
          <Image source={require('assets/grandstaff.png')} style={styles.img}/>
        </View>
        <Text style={styles.content}>
          {`\u2022 For singing there are two essential clefs to understand: treble and bass.
            \n\u2022 A clef indicates which line/space represents which note.
            \n\u2022 With each clef, the same pitches are represented by a different position.
            \n\u2022 It is important to know that a music clef is often indicated through a symbol on the far right-hand side of a staff.`}
        </Text>
        <Button
          title="Go to next section: The Treble Clef"
          color="#1E3C73"
          onPress={() => this.props.navigation.navigate('Treble')}
        />
        <Button
        title="Home"
        color="#1E3C73"
        onPress={() =>
          this.props.navigation.navigate('Home', {
            mostRecent: 'Clef',
          })}
          />
      </ScrollView>
    )}
}

class TrebleScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.screen}>
        <Text style={styles.title}>Treble Clef</Text>
        <View style={styles.image}>
          <Image source={require('assets/treble.png')} style={styles.img}/>
        </View>
        <Text style={styles.content}>
          {`\u2022 The clef you see on the top is called the treble clef (or the G clef).
          \n\u2022 In music you have notes represented by letters in the alphabet ranging from A-G (sorry H-Z…).
          \n\u2022 In the treble clef, any note placed in between the curl of it becomes G.
          \n\u2022 A space higher would become A, two spaces above would be B.
          \n\u2022 The space lower would become F, and two spaces lower would become E, and so on.
          \n\u2022 Here’s a fun little trick to remember the spaces and lines in treble clef! But keep in mind, this only works for treble clef!`}
        </Text>
        <View style={styles.image}>
          <Image source={require('assets/face.png')} style={styles.img}/>
        </View>
        <Text style={styles.content}>
          {`\u2022 See how each note in the space spells out “FACE”? By remembering that one word, you will always be able to recall the spaces in treble clef!`}
        </Text>
        <View style={styles.image}>
          <Image source={require('assets/egbdf.png')} style={styles.img}/>
        </View>
        <Text style={styles.content}>
        {`\u2022 Unfortunately the lines themselves aren’t helpful since they spell “EGBDF.”
        \n\u2022 If we put an acronym to it the lines become easier to remember try Every Good Boy Does Fine.`}
        </Text>
        <View style={styles.image}>
          <Image source={require('assets/treble.png')} style={styles.img}/>
        </View>
        <Text style={styles.content}>
        Now onto the next!
        </Text>
        <Button
          title="Go to next section: The Bass Clef"
          color="#1E3C73"
          onPress={() => this.props.navigation.navigate('Bass')}
        />
        <Button
        title="Home"
        color="#1E3C73"
        onPress={() =>
          this.props.navigation.navigate('Home', {
            mostRecent: 'Treble',
          })}
          />
      </ScrollView>
    )}
}

class BassScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.screen}>
        <Text style={styles.title}>Bass Clef</Text>
        <View style={styles.image}>
          <Image source={require('assets/bass.png')} style={styles.img}/>
        </View>
        <Text style={styles.content}>
        {`\u2022 The clef you see above is referred to as bass clef (or F clef).
        \n\u2022 This is the same concept as the G with the treble clef.
        \n\u2022 In bass clef the note that is between those two dots on the symbol becomes F.
        \n\u2022 A space higher would become G, two spaces above would be A.
        \n\u2022 The space lower would become E, and two spaces lower would become D, and so on.
        \n\u2022 Here’s a fun little trick to remember the spaces and lines in bass clef! But keep in mind, this only works for bass clef!`}
        </Text>
        <View style={styles.image}>
          <Image source={require('assets/aceg.png')} style={styles.img}/>
        </View>
        <Text style={styles.content}>
         {`\u2022 See how the spaces spell out “ACEG”? Well think of it like this: All Cars Eat Gas. Or even, All Cows Eat Grass!`}
        </Text>
        <View style={styles.image}>
          <Image source={require('assets/gbdfa.png')} style={styles.img}/>
        </View>
        <Text style={styles.content}>
          {`\u2022 See how the lines spell out “GBDFA”? Think of it like this: Great Big Dogs Fight Animals.`}
        </Text>
        <View style={styles.image}>
          <Image source={require('assets/middlec.png')} style={styles.img}/>
        </View>
        <Text style={styles.content}>
          {`\u2022 Linking both together would be called the Grand staff.
          \n\u2022 One note found on both is referred to as middle C.`}
        </Text>
        <Button
          title="Go to next section: Rhythm"
          color="#1E3C73"
          onPress={() => this.props.navigation.navigate('Rhythm')}
        />
        <Button
        title="Home"
        color="#1E3C73"
        onPress={() =>
          this.props.navigation.navigate('Home', {
            mostRecent: 'Bass',
          })}
          />
      </ScrollView>
    )}
}

class RhythmScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.screen}>
        <Text style={styles.title}>Rhythm</Text>
        <Text style={styles.content}>
          {`\u2022 Rhythm is another fundamental part of music
          \n\u2022 The clef indicates which position represents which notes, but for rhythm the clef never matters.
          \n\u2022 The symbol for the half note will always represent a half note, no matter if it’s in treble clef, bass clef, or any position on either clef!`}
        </Text>
        <View style={styles.image}>
          <Image source={require('assets/rhythm.png')} style={styles.img}/>
        </View>
        <Text style={styles.content}>
        {`\u2022 Rests are intervals of silence in a music which hold just as much significance as notes.
        \n\u2022 For both notes and rests the duration is importance so that the performer knows how long to sing, play, or be silent.
        \n\u2022 The top note is the longest note called a whole note, it is held for four beats, whether is be a pitch or silence.
        \n\u2022 The second note to the top is called a half note and is held half as long as a whole note, meaning it is held for two beats.
        \n\u2022 A quarter note is held for one beat
        \n\u2022 An eighth note is held for half a beat
        \n\u2022 A sixteenth is held for one fourth of a beat.
        \n\u2022 Be sure to memorize these symbols because they are the only indication of the duration for a note or a rest.`}
        </Text>
        <Button
          title="Go to next section: Notes and Steps"
          color="#1E3C73"
          onPress={() => this.props.navigation.navigate('Notes')}
        />
        <Button
        title="Home"
        color="#1E3C73"
        onPress={() =>
          this.props.navigation.navigate('Home', {
            mostRecent: 'Rhythm',
          })}
          />
      </ScrollView>
    )}
}

class NotesScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.screen}>
        <Text style={styles.title}>Notes and Steps</Text>
        <Text style={styles.content}>
          {`
          \u2022 As mentioned before there are 7 fundamental notes in music: A, B, C, D, E, F and G.
          \n\u2022 To understand the relationship between notes you must understand steps.
          \n\u2022 There are two kinds of steps: whole steps and half steps, let us look at the piano below to better understand this.`}
        </Text>
        <View style={styles.image}>
          <Image source={require('assets/notes.png')} style={styles.img}/>
        </View>
        <Text style={styles.content}>
          {`\u2022 As shown, here are the 7 notes in the piano above.
          \n\u2022 Notice how they are not all completely next to each other. For example, between C and D there is a black note.
          \n\u2022 This note is always referred to as C sharp.
          \n\u2022 When two notes are right next to each other, this means they are a half step apart.
          \n\u2022 So in this case, C and C sharp are a half step apart and C sharp and D are a half step apart.
          \n\u2022 The distance between C and D is two half steps or one whole step.`}
        </Text>
        <View style={styles.image}>
          <Image source={require('assets/steps.png')} style={styles.img}/>
        </View>
        <Text style={styles.content}>
          {`\u2022 Sharps and flats come to name the notes on the black notes.
          \n\u2022 A note is called either a sharp or a flat in relation to the fundamental notes.`}
        </Text>
        <View style={styles.image}>
          <Image source={require('assets/#b.png')} style={styles.img}/>
        </View>
        <Button
          title="Go to next section: Measures"
          color="#1E3C73"
          onPress={() => this.props.navigation.navigate('Measures')}
        />
        <Button
        title="Home"
        color="#1E3C73"
        onPress={() =>
          this.props.navigation.navigate('Home', {
            mostRecent: 'Notes',
          })}
          />
      </ScrollView>
    )}
}

class MeasuresScreen extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.title}>Measures</Text>
        <View style={styles.image}>
          <Image source={require('assets/measures.png')} style={styles.img}/>
        </View>
        <FlatList
        data = {[
          {key: 'The vertical bars create sections in staffs called measures.'},
          {key: 'The measure plays a vital role when it comes to the time signature.'},
          {key: 'A single vertical line represents the end of a measure.'}
          ]}
        renderItem={({item}) => <Text style={styles.content}>{`\u2022 ${item.key}`}</Text>}
        />
        <Button
          title="Go to next section: Time Signatures"
          color="#1E3C73"
          onPress={() => this.props.navigation.navigate('TimeSig')}
        />
        <Button
        title="Home"
        color="#1E3C73"
        onPress={() =>
          this.props.navigation.navigate('Home', {
            mostRecent: 'Bass',
          })}
          />
      </View>
    )}
}

class TimeSigScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.screen}>
        <Text style={styles.title}>Time Signatures</Text>
        <View style={styles.image}>
          <Image source={require('assets/time.png')} style={styles.img}/>
        </View>
        <Text style={styles.content}>
        {`\u2022 The time signature is followed by the clef, and it indicates the rhythm through the expression of a fraction as shown above.
        \n\u2022 The clef does not impact the time signatures.
        \n\u2022 The time signature indicates how long one beat is.
        \n\u2022 There is a different significance for the number in the top (numerator) and the number in the bottom (denominator).
        \n\u2022 The top number represents how many beats there are in a measure.
        \n\u2022 In the first set shown above, there can be and only be four beats in a measure. For example, there can be either one whole note (4 beats), two half notes (2+2=4), a half note and two quarter notes (2+1+1=4), the possibilities are endless
        \n\u2022 The bottom number represents which note gets the beat, indicating whether or not the beats should be counted as whole note, half note, quarter note, etc.
        \n\u2022 The bottom number will only correspond to the note values:
        \n\t 1=whole note
        \n\t 2=half note
        \n\t 4=quarter note
        \n\t 8=eighth note
        \n\t 16=sixteenth note`}
        </Text>
        <View style={styles.image}>
          <Image source={require('assets/commonsigs.png')} style={styles.img}/>
        </View>
        <Text style={styles.content}>
        {`\u2022 Two common times signatures are cut time and common time.
        \n\u2022 Common time is represented by the C, and it is another way of representing the time signature of 4/4.
        \n\t\u2022 This means that each measure only has four beats and the beat is represented by a quarter note.
        \n\u2022 Cut time is represented by the C with a vertical line splitting it in half, and it is another way of representing a time signature of 2/2.
        \n\t\u2022 This means that each measure only has two beats and the beat is represented by the half note.`}
        </Text>
        <Button
          title="Go to next section: Solfege"
          color="#1E3C73"
          onPress={() => this.props.navigation.navigate('Solfege')}
        />
        <Button
        title="Home"
        color="#1E3C73"
        onPress={() =>
          this.props.navigation.navigate('Home', {
            mostRecent: 'TimeSig',
          })}
          />
      </ScrollView>
    )}
}

class SolfegeScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.screen}>
        <Text style={styles.title}>Solfege</Text>
        <Text style={styles.content}>
       {`\u2022 While singing and practicing these notes, we do not sing the alphabet itself but rather syllables to represent the note.
       \n\u2022 C is always considered your beginning note of “Do.”
       \n\u2022 As you climb up, you use the syllables as shown below to continue.`}
        </Text>
        <View style={styles.image}>
          <Image source={require('assets/solfege.png')} style={styles.img}/>
        </View>
        <Text style={styles.content}>
          {`\u2022 In addition, there are hand symbols which go along with each syllable.
          \n\u2022 The significane of these gestures is regal, your brain is able to  function more effectively and sucessfully when matching hand movements to vocal symbols.
          \n\u2022 It is the same for going up as it is for coming back down.`}
        </Text>
        <View style={styles.image}>
          <Image source={require('assets/solfegehand.png')} style={styles.img}/>
        </View>
        <Button
          title="Go to next section: Scales"
          color="#1E3C73"
          onPress={() => this.props.navigation.navigate('Scales')}
        />
        <Button
        title="Home"
        color="#1E3C73"
        onPress={() =>
          this.props.navigation.navigate('Home', {
            mostRecent: 'Solfege',
          })}
          />
      </ScrollView>
    )}
}

class ScalesScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.screen}>
        <Text style={styles.title}>Scales</Text>
        <Text style={styles.content}>
        {`\u2022 Scales are a set of pitches organized by the increasing and decreasing of their pitches.
        \n\u2022 These are great to vocally practice when first getting started in music theory and singing.`}
        </Text>
        <Text style={styles.content}>
          {`\u2022 To form the major scale starting at the first pitch a major scale must go: Whole Whole Half, Whole Whole Whole Half.`}
        </Text>
        <View style={styles.image}>
          <Image source={require('assets/doremi.png')} style={styles.img}/>
        </View>
        <View style={styles.image}>
          <Image source={require('assets/majorform.png')} style={styles.img}/>
        </View>
        <Text style={styles.content}>
        {`\u2022 With minor scales, it is the exact opposite of the major scale.
        \n\u2022 Every whole step in the major scale becomes a half step for the minor scale and vice verse.
        \n\u2022 Starting at the first pitch it must go: Half Half Whole, Half Half Half Whole.
        \n\u2022 Although a major difference is that, since it is minor, it starts on la rather than do. Look below to see:`}
        </Text>
        <View style={styles.image}>
          <Image source={require('assets/latido.png')} style={styles.img}/>
        </View>
        <View style={styles.image}>
          <Image source={require('assets/minorform.png')} style={styles.img}/>
        </View>
        <Button
          title="Go to next section: Triads"
          color="#1E3C73"
          onPress={() => this.props.navigation.navigate('Triads')}
        />
        <Button
        title="Home"
        color="#1E3C73"
        onPress={() =>
          this.props.navigation.navigate('Home', {
            mostRecent: 'Scales',
          })}
          />
      </ScrollView>
    )}
}

class TriadsScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.screen}>
        <Text style={styles.title}>Triads</Text>
        <Text style={styles.content}>
        {`\u2022 Taking into consideration that the prefix “tri” means three, a triad is simply a stack of three notes (each sung independently of course...could you imagine!)
        \n\u2022 When singing one, you start from the bottom and climb up to the third note just to go back down to the start.`}
        </Text>
        <View style={styles.image}>
          <Image source={require('assets/majortriad.png')} style={styles.img}/>
        </View>
        <Text style={styles.content}>
          {`\u2022 Major Triads: Building on our knowledge of major scales, a major triad begins on do and the three notes that consists in a major triad are : Do, Mi, So.`}
        </Text>
        <View style={styles.image}>
          <Image source={require('assets/minortriad.png')} style={styles.img}/>
        </View>
        <Text style={styles.content}>
          {`\u2022 Minor Triads: Similarly, like minor scales minor triads begins on la and the three notes that consists in a major triad are : La, Do, Mi.`}
        </Text>
        <Button
          title="Go to next section: The End"
          color="#1E3C73"
          onPress={() => this.props.navigation.navigate('End')}
        />
        <Button
        title="Home"
        color="#1E3C73"
        onPress={() =>
          this.props.navigation.navigate('Home', {
            mostRecent: 'Bass',
          })}
          />
      </ScrollView>
    )}
}

class EndScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.screen}>
        <Text style={styles.title}>The End</Text>
        <Text style={styles.content}>
          Congratulations! You have finished the entire course. Now it is time to put your new found skills to the test. Keep making music and keep learning.
        </Text>
        <Button
        title="Home"
        color="#1E3C73"
        onPress={() =>
          this.props.navigation.navigate('Home', {
            mostRecent: 'Bass',
          })}
          />
      </ScrollView>
    )}
}

class MoreScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.screen}>
        <Text style={styles.title}>About AMF</Text>
        <View style={styles.image}>
          <Image source={require('assets/logo.png')} style={styles.img}/>
        </View>
        <Text style={styles.content}>
          Ashley’s Music Foundation, also known as AMF, is a 501(c)(3) non-profit organized located in Naperville, IL. We focus on implementing music programs in high schools and providing students with high-quality  music education. AMF understands the significance music programs can have not only in schools, but on individual lives of students which is why we provide schools with all resources needed in order to create the most impactful and supportable curriculum. AMF focuses on choir programs in particular, and this aids students towards a more wholehearted, dedicated, and impassioned lifestyle.
        </Text>
        <View style={styles.website}>
        <Text style={styles.content} onPress={() => Linking.openURL('http://www.amfchicago.org')}>
          For more information visit amfchicago.org
        </Text>
        </View>
        <View style={styles.donate}>
        <Text style={styles.content} onPress={() => Linking.openURL('https://www.youcaring.com/ashleymusicfoundation-1173222')}>
          Donate to AMF
        </Text>
        </View>
        <Button
        title="Home"
        color="#1E3C73"
        onPress={() =>
          this.props.navigation.navigate('Home')}
          />
      </ScrollView>
    )}
}

const RootStack = createStackNavigator(
  {
    Home:       {screen: HomeScreen     },
    Staff:      {screen: StaffScreen    },
    Clef:       {screen:ClefScreen      },
    Treble:     {screen:TrebleScreen    },
    Bass:       {screen:BassScreen      },
    Rhythm:     {screen:RhythmScreen    },
    Notes:      {screen:NotesScreen     },
    Measures:   {screen:MeasuresScreen  },
    TimeSig:    {screen:TimeSigScreen   },
    Solfege:    {screen:SolfegeScreen   },
    Scales:     {screen:ScalesScreen    },
    Triads:     {screen:TriadsScreen    },
    End:        {screen:EndScreen       },
    More:       {screen:MoreScreen      },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    paddingLeft: 0,
  },
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  content: {
    color: '#1E3C73',
    fontSize: 18,
    paddingLeft: 25,
    paddingRight: 25,
    fontFamily: 'Open Sans',
  },
  section: {
    backgroundColor: '#fff',
    color: '#1E3C73',
    fontSize: 36,
    fontFamily: 'Open Sans',
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    border: 'solid',
    borderColor: '#1E3C73',
    borderWidth: '4px',
    borderRadius: '10px',
    marginBottom: 3,
  },
  title: {
    color: '#1E3C73',
    fontSize: 36,
    fontFamily: 'Times New Roman',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 5,
    marginBottom: 5,
  },
  head_title: {
    color: '#1E3C73',
    fontSize: 36,
    fontFamily: 'Times New Roman',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 5,
    marginBottom: 20,
  },
  logo: {
    height: 87,
    width: 100,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: 'white',
    position: 'fixed',
    zIndex: 2,
  },
  website: {
    paddingTop: 10,
  },
  donate: {
    paddingTop:15,
  },
});
