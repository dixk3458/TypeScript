{
  type Video = {
    title: string;
    id: string;
    url: string;
    data: string;
  };

  type VideoMetaData = Omit<Video, 'id' | 'title'>;

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-data..',
    };
  }

  function getVideoMetaData(video: Video): VideoMetaData {
    const { url, data } = video;
    return { url, data };
  }

  const video: Video = {
    title: '제목',
    id: '아이디',
    url: 'URL',
    data: '데이터',
  };
}
