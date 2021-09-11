/**
 * Created by zk on 2017/6/15.
 */
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

/**
 * @class
 * @description 存储器。仅适用于少了的数据存储，大量数据
 */
const storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true,
});

export default storage;
