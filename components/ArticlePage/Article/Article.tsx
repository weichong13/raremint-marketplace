import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import styles from './Article.module.scss';
import Link from 'next/link';
import QuestionAnswer from '../QuestionAnswer/QuestionAnswer';
import { questionAnswerIProps } from '../QuestionAnswer/types';
import { getQueryStringParams } from '../../../utils/helper';
import butter from '../../../butter-client';
import { DataI } from './type';
import ImgBootStrap from 'react-bootstrap/Image';

const Article = () => {
  const dummyData: Array<questionAnswerIProps> = [
    {
      question: 'What is a wallet and how do I get one?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At in tellus integer feugiat scelerisque. Aliquet nibh praesent tristique magna. Sed vulputate mi sit amet. Etiam non quam lacus suspendisse faucibus. Amet facilisis magna etiam tempor. Blandit volutpat maecenas volutpat blandit aliquam etiam. Urna cursus eget nunc scelerisque viverra mauris in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Dui id ornare arcu odio ut. Vulputate dignissim suspendisse in est. Orci a scelerisque purus semper. Facilisis sed odio morbi quis. Morbi tristique senectus et netus et malesuada fames.'
    },
    {
      question: 'How can I make money on RareMint?',
      answer:
        'Mollis aliquam ut porttitor leo a diam sollicitudin. Ipsum a arcu cursus vitae. Pulvinar elementum integer enim neque volutpat ac. Sed augue lacus viverra vitae congue. Ultricies mi eget mauris pharetra et ultrices neque ornare. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Volutpat ac tincidunt vitae semper quis lectus nulla. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Leo vel fringilla est ullamcorper. Vel quam elementum pulvinar etiam non. Aliquet bibendum enim facilisis gravida neque convallis. Quis auctor elit sed vulputate mi sit. Orci phasellus egestas tellus rutrum tellus pellentesque. Amet commodo nulla facilisi nullam. Sed faucibus turpis in eu mi.'
    },
    {
      question: 'Another Question?',
      answer:
        'Tortor vitae purus faucibus ornare suspendisse sed. Faucibus pulvinar elementum integer enim neque. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Aliquam etiam erat velit scelerisque in. Sit amet justo donec enim diam vulputate ut pharetra. Lacus suspendisse faucibus interdum posuere. Sollicitudin ac orci phasellus egestas tellus rutrum. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Id aliquet risus feugiat in ante metus dictum at. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Lobortis scelerisque fermentum dui faucibus in. Mi tempus imperdiet nulla malesuada pellentesque. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Amet mauris commodo quis imperdiet massa. Vel eros donec ac odio. Augue mauris augue neque gravida in fermentum et sollicitudin ac.'
    },
    {
      question: 'Another Question?',
      answer:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Ullamcorper a lacus vestibulum sed. Lectus proin nibh nisl condimentum id venenatis a condimentum. Aliquet nec ullamcorper sit amet risus nullam eget felis. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Odio pellentesque diam volutpat commodo sed egestas egestas. Eget mauris pharetra et ultrices neque ornare aenean. Ultrices gravida dictum fusce ut placerat orci. Nisl vel pretium lectus quam id leo in. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Etiam tempor orci eu lobortis elementum nibh.'
    }
  ];

  const [data, setData] = useState<DataI>();

  useEffect(() => {
    const { slug } = getQueryStringParams(window.location.search);
    butter.post
      .retrieve(slug)
      .then(function (response) {
        setData(response.data.data);
      })
      .catch(function (resp) {
        console.log(resp);
      });
  }, []);

  const getDate = (date: string) => {
    let options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    let today = new Date(date);
    return today.toLocaleDateString('en-US', options);
  };

  if (!data) {
    return null;
  }

  return (
    <Container className={styles.article}>
      <div className={styles.breadCrumb}>
        <Link href="/">Home</Link> / Community
        <p className={styles.title}>{data.title}</p>
        <p className={styles.subTitle}>Niko Hosn Cofounder at Raremint.</p>
        <p className={styles.date}>{getDate(data.published)}</p>
        <div className={styles.line}></div>
        <ImgBootStrap className={styles.img} src={data.featured_image} />
        <div className={'mt-5'}>
          <div dangerouslySetInnerHTML={{ __html: data.body }}></div>
          {/*{dummyData.map((obj: questionAnswerIProps, index) => {*/}
          {/*  return (*/}
          {/*    <QuestionAnswer*/}
          {/*      key={index}*/}
          {/*      question={obj.question}*/}
          {/*      answer={obj.answer}*/}
          {/*    />*/}
          {/*  );*/}
          {/*})}*/}
        </div>
      </div>
    </Container>
  );
};

export default Article;
