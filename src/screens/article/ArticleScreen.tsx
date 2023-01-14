import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';

import {Colors} from '../../Colors';
import {Header} from '../../components/Header';
import {ArrowLeftIcon} from '../../icons/ArrowLeft';
import {HomeStackParamList} from '../../navigators/Home';
import {useArticles} from '../../context/Articles';
import {FontSize, Text} from '../../components/Text';
import {RenderMarkdown} from '../../components/RenderMarkdown';

const {width} = Dimensions.get('screen');

type NavigationProps = StackNavigationProp<HomeStackParamList, 'ArticleDetail'>;
type RouteProps = RouteProp<HomeStackParamList, 'ArticleDetail'>;
type ArticleScreenProps = {
  route: RouteProps;
  navigation: NavigationProps;
};

export const ArticleScreen = ({route, navigation}: ArticleScreenProps) => {
  const {
    params: {id},
  } = route;
  const {navigate, goBack} = navigation;
  const {getById} = useArticles();
  const article = getById(id);

  return (
    <View style={styles.root}>
      <Header
        title={'Article'}
        leftIcon={<ArrowLeftIcon />}
        onPressLeft={goBack}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FastImage
          style={styles.image}
          source={{
            uri: 'https://unsplash.it/400/400?image=1',
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.contentContainer}>
          <Text fontSize={FontSize.CaptionThree}>
            BY STEFF YOTKA AND MADELINE FASS
          </Text>
          <Text style={styles.title} fontSize={FontSize.TitleOne}>
            The Ultimate Guide to Shopping Spring Trends in 2022
          </Text>
          <RenderMarkdown
            content={
              '**Vad för gravidförsäkringar kan jag välja på?** Hos Länsförsäkringar erbjuds en Basförsäkring som är gratis att teckna samt en Plusförsäkring som du betalar för.**Hur skiljer sig Basförsäkringen och Plusförsäkringen åt?** Basförsäkringen är en kombinerad olycksfallsförsäkring och livförsäkring medan Plusförsäkringen har ett mycket mer utökat skydd. Vad menar vi med det kanske du undrar? Oroa dig inte – nu reder vi ut begreppen så det blir lätt för dig att fatta beslut om vilken försäkring du ska teckna och varför!Det finns ingen anledning att tacka nej till något som är gratis, men tänk på att skyddet i gratisvarianten är begränsat och att det inte finns möjlighet till ersättning ifall du skulle föda ett barn som skulle visa sig ha en sjukdom.I betalförsäkringen Plus får du ett utökat skydd och försäkringen gäller om barnet skulle födas med en sjukdom. Du har i Plusversionen även rätt till ersättning om en förlossningsskada på barnet skulle uppstå, exempelvis om barnet skulle skadas av syrebrist under förlossningen. Dessutom finns ett skydd om barnet blir sjukt under de första sex månaderna efter födseln och försäkringen ersätter även vissa komplikationer hos den gravida, som havandeskapsförgiftning, akut kejsarsnitt och svårare bristningar. Så Plusversionen är en långt mycket mer täckande produkt.1. Numbered item1. Another numbered item	1. Numbered item	1. Another numbered item1. A third numbered item	* Bullet item	* Another bullet itemhur funkar det här då?1. Another numberd list2. list item 2**Vad exakt skyddar Länsförsäkringars Graviditetsförsäkring Plus för?** * Du får en ersättning på 50 000 kronor som kan betalas ut om barnet föds med vissa allvarliga diagnoser. Exempel på [dessa diagnoser](https://www.lansforsakringar.se/gravid?utm_source=personrisk&utm_medium=babyjourneyapp&utm_campaign=lf_sak_gravidforsakring_bj2021_artikel) kan du läsa mer om här.* En förlossningsskada på barnet jämställs med en sjukdom, därför finns det möjlighet till ersättning om barnet exempelvis får en hjärnskada på grund av syrebrist under förlossningen som leder till en bestående funktionsnedsättning. Utan en gravidförsäkring plus är barnet annars helt oförsäkrat i det skedet.* Sjukhusvistelse med 200 kronor per dygn om ditt barn blir kvar på sjukhuset efter förlossningen eller om den gravida innan förlossningen behöver ligga på sjukhus.* Vid en krisreaktion, till exempel i samband med att barnet drabbas av en förlossningsskada eller allvarlig sjukdom och ni behöver träffa en psykolog, ersätter vi behandlingar för kristerapi upp till en kostnad av 10 000 kronor per försäkrad.* Ersättningen till den gravida vid vissa komplikationer i samband med graviditet och förlossning är 3 000 kronor per komplikation.**När och hur ska jag teckna en gravidförsäkring?**Så snart som möjligt! Gravidförsäkringen börjar gälla när du passerat graviditetsvecka 22. Om du väljer att köpa en betald gravidförsäkringen, se till att betalningen görs tidigt, redan innan du gör ditt första ultraljud. Om du väntar och en skada eller sjukdom upptäcks vid ultraljudet innan du betalt försäkringen blir det ingen ersättning.  **Nästa steg: barnförsäkring** En betald gravidförsäkring ger alltså ett skydd som du inte kan få på annat sätt och gäller till barnets sexmånadersdag. När graviditeten är över och barnet kommit är det dags för nästa steg – en barnförsäkring. Även denna rekommenderar vi er att teckna så snart som möjligt efter att barnet är fött och mer information om detta hittar ni i vår artikel "Det här är en barnförsäkring" här nedanför. *Vill du läsa mer om de gravidförsäkringar som Länsförsäkringar erbjuder och [teckna en försäkring?](https://www.lansforsakringar.se/gravid?utm_source=personrisk&utm_medium=babyjourneyapp&utm_campaign=lf_sak_gravidforsakring_bj2021_artikel)* Besök oss här!'
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.Primary.White,
  },
  image: {
    width: width - 40,
    aspectRatio: 16 / 9,
    alignSelf: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
  },
  title: {
    marginTop: 8,
    marginBottom: 16,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
});
