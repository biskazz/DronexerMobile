import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ApiProvider } from '../providers/api/api';
import { AuthProvider } from '../providers/auth/auth';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { UsersProvider } from '../providers/users/users';
import { AuthHelperProvider } from '../providers/auth-helper/auth-helper';
import { IonicStorageModule } from '@ionic/storage';
import { StaticDataProvider } from '../providers/static-data/static-data';
import { ValidateProvider } from '../providers/validate/validate';
import { ImagePicker } from '@ionic-native/image-picker';
import { PostProvider } from '../providers/post/post';
import { PostsProvider } from '../providers/posts/posts';
import { HeaderColor } from '@ionic-native/header-color';
import { FileTransfer } from '@ionic-native/file-transfer';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ProfileProvider } from '../providers/profile/profile';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { File } from '@ionic-native/file';
import { FilesProvider } from '../providers/files/files';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { PhotoViewer } from '@ionic-native/photo-viewer'
import { BrowserTab } from '@ionic-native/browser-tab';
import { SearchProvider } from '../providers/search/search';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    IonicImageViewerModule,
    ComponentsModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiProvider,
    AuthProvider,
    UsersProvider,
    AuthHelperProvider,
    StaticDataProvider,
    ValidateProvider,
    ImagePicker,
    PostProvider,
    PostsProvider,
    HeaderColor,
    File,
    ProfileProvider,
    FilesProvider,
    FileTransfer,
    AndroidPermissions,
    PhotoViewer,
    BrowserTab,
    SearchProvider
  ]
})
export class AppModule {
}
