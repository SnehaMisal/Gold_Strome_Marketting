"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[500],{3244:(p,a,e)=>{e.d(a,{v:()=>h});var l=e(8252),r=e(6895),i=e(4006),_=e(513),n=e(4650);let h=(()=>{class s{}return s.\u0275fac=function(g){return new(g||s)},s.\u0275mod=n.oAB({type:s}),s.\u0275inj=n.cJS({imports:[[_.IJ,r.ez,l.Bz,i.u5]]}),s})()},5620:(p,a,e)=>{e.d(a,{v:()=>s});var l=e(1135),r=e(2340),i=e(4650),_=e(8252),n=e(529),h=e(4383);let s=(()=>{class o{constructor(t,u,c){this.router=t,this.http=u,this.toastr=c,this.isAuthenticated=!1,this.profileImageUrlSource=new l.X(""),this.profileImageUrl$=this.profileImageUrlSource.asObservable()}login(t){console.log("data",t.get("loginType")),this.http.post(r.N.apiUrl+"allAdminLogins",t).subscribe(u=>{this.response=u,console.log("response",this.response),"200"==this.response.error_code?(console.log("login"),this.isAuthenticated=!0,this.toastr.success(this.response.message),localStorage.setItem(r.N.token,this.response.Token),localStorage.setItem(r.N.LoginType,this.response.loginType),localStorage.setItem(r.N.login_id,this.response.id),this.userLoginType=this.response.loginType,"Admin"==this.userLoginType&&this.router.navigate(["admin/dashboard"]),"CEO"==this.userLoginType&&this.router.navigate(["ceo/dashboard"]),"GM"==this.userLoginType&&this.router.navigate(["gm/dashboard"]),"SM"==this.userLoginType&&this.router.navigate(["sm/dashboard"]),"DSM"==this.userLoginType&&this.router.navigate(["dsm/dashboard"]),"SA"==this.userLoginType&&this.router.navigate(["sa/dashboard"])):"401"==this.response.error_code&&this.toastr.error(this.response.message)})}logout(){localStorage.clear(),this.isAuthenticated=!1,this.router.navigate(["login"])}isAuthenticatedUser(){return this.isAuthenticated}getUserLoginType(){return console.log("this.userLoginType;",this.userLoginType),this.userLoginType}updateProfileImageUrl(t){this.profileImageUrlSource.next(t)}}return o.\u0275fac=function(t){return new(t||o)(i.LFG(_.F0),i.LFG(n.eN),i.LFG(h._W))},o.\u0275prov=i.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}}]);