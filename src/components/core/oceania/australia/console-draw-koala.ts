/* eslint-disable prettier/prettier */
export const drawKoala = () => {
  const black = "color: black; background-color: black"
  const grey1 = "color: #8d969d; background-color: #8d969d"
  const grey2 = "color: #abb1b9; background-color: #abb1b9"
  const grey3 = "color: #45545b; background-color: #45545b"
  const green = "color: green; background-color: green"
  const tree = "color: #edb45a; background-color: #edb45a"
  const reset = ""
  console.log(
    `
                                                            %c.%c
                                                             %c#%c
                                                            %c:z%c
                                                      %c..%c    %c#z%c  
                                                      %ci:%c    %cnz%c
                                                      %c,%cz%c.%c  %c.%cx%cz%c       %c,%c
                                                      %cx%cx%c+%c  %c;%cz%cz%c     %cx%c+%ci%c
                                                       %cn%cz%c,%c %c+%c#%c#%c    %ci%cnx%cx%c
                                     %c.;ii::%c            %cz%c+%cz%c %cz%c+%c#%c   %c;%cnz%c*%c
                                  %c+*x%cnz#znM%cz,%c          %c#%c#x%c,n%c+%c+%c  %c,%cn+n%cn%c
                                 %c;x#%c*******+x%c##%c        %ci%cz#%c#n%cz%c;%c %cx%cx+n%c,%c
                                %c*n%c***********%cz#%c        %c.%cx+%cM%cxn%cn%c %c*%czn%c;%c
                               %cin%c*************%czi%c        %cn%c+%cx%cW%c#%c %cn%cnx%c;%c
                              %c.x%c***************%czz%c       %c;%cn%cz#%c  %c;%cW%ci;i*i;.%c
                              %c#%c+**************z%cn;%c        %c+n++;#Wn%cz###z%cnn;%c
                             %cxx%c*******%c#z#%c*****%czWW%c         %cz+%c#i%cz#%cn+++++++%cz+%c
                             %ci#%c*****%c#n%c+%c*x%c+*****%cn*%c        %cin%c*i%cn,%c %c.#%cz++++++%czi%c
                             %c+%c*****%ci%c*;iM%c#%c*******%cx.%c     %c##%c+;*%cnWxzz%c %c:zxz%c++++%cz.%c
                             %c#*%c****%c;%c;;;;%c#%c#******%c+#%c    %c:z%ci;+%c#++#%c#M%ci%c  %c.i#zzzz*%c
                             %c+*%c****%c;%c;;;;;%c#%c#*****%c*x%c   %ci#%c;;%c#+%c  %cxx%c++%cx*%c
                         %c.;*#xn#%c+**%c;%c;;;;;;%cz%c******%cxx%c %c*+%c;;%c#+%c    %c;x%c++%cn+%c
                      %c**nn%c+***+#%cznnn*%c;;;;;;%c*%c*****%cn.i+%c;;%c+#%c      %cix%c++%cn*%c
                     %c:x#%c************%czn#%c;;;;%c*%c*****%cx*#%c;;%c*z%c        %c;M%c#+%cn:%c
                    %ciz%c****************+%cn*%c;%ci%c******%cMz%c;;%cix%c          %c.#%cn#%cn%c
                   %ci#%c*******************%cz#%c*******%cWi%c;;%cn.%c            %c;+:%c
                  %c,z%c********************%cnM%c******%czz%c;;%cz;%c    %c.%c
                  %cz%c***********************%cn%c+****%cMi%c;*%c+%c     %c#:%c
         %c;**i,%c   %c:n%c***********************%czM%c+**%cz#%c;;%cnn%c     %cn*%c
      %c;nx%cz#+#%cnx*%c %cz%c*************************%cMz%c*+%cx%c;;%c+;%c     %cx%cx%c#%c
    %c.nz%c********%c#zn%c*************************%c#n%c*%cxi%c;i%cz%c      %c,%cn%cn%c
   %c,x%c+**********%cn+%c**************************%cxzi%c;;%c#;%c      %c:%czz%c,%c
  %c.x%c************%cn%c*******************+%cx#%c*****+%cn%c;;%cin%c       %c;%cz#%c;%c
  %cn+%c************%cn%c*************%czn#%c***%cn#W%c******%cn%c*;%c+i%c       %c:%cz+%c*%c
 %c,x%c***********%ci%c+%c#%c***********%c+M%cxxM%cM#%c*%c+x#%c*******%cx%c;%cn%c        %c:%cn+%c+%c      %c;i%c
 %c++%c*******+%cx*%c;;%c+%c+***********%cM%cnnnnn%cWn%c**********%cx%c*%c#%c        %c.%cx+%c+%c  %c;z%cxnn%c*%c
 %cz%c*******+%cz%c;;;;%cz%c************%cW%cnnnnnn%cMz%c*********%cz%cx%c:%c         %cz%c#i%c:x%cn+#z%c:%c
 %cn%c*******%cx%c;;;;;%cz%c************%cW%cnnnnnnn%cW%c+********%c#W%c          %c;%cx%c#x%c+#%cz;%c
 %cn%c******+%cz%c**;;;%cz%c********%cz+%c**%cW%cnnnnnnn%cxx%c********%cz#%c           %cnxn%cz%c;%c
 %cz%c******#%c+%cMi;;;%c#%c*******%cx#@%c**%cW%cnnnnnnnn%cW%c********%cx:%c          %ci%cx%cWx%c
 %c#%c******#%cM%c##;;;%c+%cx******%cz#M%c**%cM%cxnnnnnnn%cW%c+*******%cW%c         %c++%c#%c+n%c#%cz%c
 %c:z%c******#%c*%cx;;;i%cM%c*******+***#%cM%cnnnnnnn%cM%c*******%cxn%c       %c#z%c+z%c:%c %c.%cn#%c;%c
 %cxx%c********+%cx%c;;;%cz%c************%cM%cnnnnnnn%cn%c******%cn%cx%c*%c     %c;n%c##%c:%c    %cz%czz%c#%c
  %ci#%c#+******+%cn%c*;#%cn%c+**********%c#M%cnnnnn%cW%c+%c#z%c***%cn%cz%c#%c,   %c.#%cz#%c,%c       %c+%cx#%c,%c
  %cxW%cx*********%c**%c@%cz%c***********x%cMxxxW%cn*%cnz%c**%cn%c+;%cz%c   %c;#%cz*%cx%c          %c,#%cxM%c:%c
   %c.:%cM+*********%c*n%cM+************#nn#%c#x%c+*%c#%cni;%c;%c  %c++%c*z%c:%c             %c;;%c
     %c,x%c***********+%cM%c**************%c#nz%c**%cn#%c;;%c##%c %c;#%ciz%c:%c
      %c:n%c***********%czn%c*********+%czn#%c****%cn##znz#M%c*;z%c:%c
       %c:x#%c********+%czM%c***************%cz@Wn#%c+*+%c#nnn;%c
         %c*xxz%c#%cznxzi%c %cx%c***********+%cnWW#%c*********%c#Mxn%c
           %c.;ii:%c    %cix%c*********%cnxMn%c***********#*%cx@W%c
                      %c;x#%c****%c#xx%c+%cn#%c**************%cz#zx%c
                       %cii#z%cM%cxz%c**%c+#%c****************%cn+,%c
                           %cn%c*********************%czi%c
                          %cxx%c********************+%cMM%c
                          %ci#%c*******************+%cM,%c
                          %cn%c*******************%czW%c
                         %c.x%c***************+%czxM%c#%cnn%c
                         %c;z%c*******+%czxxxMMxn#%c*;;%c**%c
                         %c++%c************%cn*%c;%c*#zz%c+%ciz%c
                         %cz%c*************%cnnxn#%c++%czxM%c
                         %cz%c************+%cM#%c*******%cnz%c
                         %cz%c***********%c+n%c**********%cM%c
                         %c++%c*********%c+z%c***********%cn*%c
                         %c;z%c*********%cx%c************%c#M%c
                         %c.x%c**********************%c+#%c
                          %cn%c**********************+%cx#%c
                          %ciz%c*********************%c##n%c
                           %cM%c*********************%cz%c+%cxxnn%c
                           %c;n%c***************+****%cnx%c++%c*zM%c
                            %cn+%c*************%c#z%c****%cz%c****%c#xx%c
                             %cx%c*************%c+z%c**********%czz%c
                             %ci@#%c***********%c+M%c******+%czMnn%c
                              %cn#x#%c********%c#z##%c**%c#nxn+#%c
                               %c..+Mxz%c###%cnnn;;#znz*%c;;;;%cn%c
                                   %c,;**;.%c %czi%c;;;;;;;;;;%c*+%c
                                          %c.n%c;;;;;;;;;;;%cz,%c
                                           %ci#%c;;;;;;;;;;%ciz%c
                                            %cz*%c;;;;;;;;;;:%cn%c
                                            %c.n%ci;;;;;;;.%c
                                             %c,z%c;;;;:.%c
                                              %c;+%c;:.%c
      `,
    black, reset, // line 1
    black, reset, // line 2
    black, reset, // line 3
    black, reset, black, reset, // line 4
    black, reset, black, reset, // line 5
    black, green, black, reset, black, green, black, reset, black, reset, // line 6
    black, green, black, reset, black, green, black, reset, black, green, black, reset, // line 7
    black, green, black, reset, black, green, black, reset, black, green, black, reset, // line 8
    black, reset, black, green, black, reset, black, green, black, reset, black, green, black, reset, // line 9
    black, grey1, black, reset, black, green, black, green, black, reset, black, green, black, reset, // line 10
    black, grey1, black, reset, black, green, black, green, black, reset, black, green, black, reset, // line 11
    black, grey1, black, reset, black, green, black, green, black, reset, black, green, black, reset, // line 12
    black, grey1, black, reset, black, green, black, green, black, reset, black, green, black, reset, // line 13
    black, grey1, black, reset, black, green, black, reset, black, green, black, reset, // line 14
    black, grey1, black, reset, black, green, black, reset, // line 15
    black, grey1, black, grey1, black, reset, black, tree, black, green, black, reset, // line 16
    black, grey1, black, grey2, black, grey1, black, reset, black, tree, black, reset, black, green, black, reset, // line 17
    black, grey1, black, grey2, black, grey1, black, reset, black, tree, black, reset, black, green, black, reset, // line 18
    black, grey1, black, grey2, black, grey1, black, reset, black, tree, black, green, black, reset, black, reset, // line 19
    black, grey1, black, grey2, black, grey1, black, reset, black, tree, black, reset, black, green, black, reset, // line 20
    black, grey1, black, grey2, black, grey1, black, reset, black, tree, black, reset, black, green, black, reset, // line 21
    black, grey1, black, grey2, black, grey1, black, tree, black, reset, black, green, black, reset, // line 22
    black, grey1, black, grey2, black, grey1, black, tree, black, reset, black, green, black, reset, // line 23
    black, grey1, black, grey2, black, grey1, black, tree, black, reset, black, green, black, reset, // line 24
    black, grey1, black, grey1, black, tree, black, reset, black, reset, // line 25
    black, grey1, black, grey1, black, tree, black, reset, black, reset, // line 26
    black, grey1, black, grey1, black, tree, black, reset, black, reset, // line 27
    black, reset, black, grey1, black, grey1, black, tree, black, reset, black, reset, // line 28
    black, grey1, black, reset, black, grey1, black, grey1, black, tree, black, reset, black, green, black, reset, // line 29
    black, grey1, black, grey1, black, grey1, black, tree, black, reset, black, green, black, reset, // line 30
    black, grey1, black, grey1, black, tree, black, reset, black, green, black, reset, // line 31
    black, grey1, black, grey1, black, grey1, black, tree, black, reset, black, green, black, reset, // line 32
    black, grey1, black, grey1, black, grey1, black, grey1, black, tree, black, reset, black, green, black, reset, // line 33
    black, grey1, black, grey2, black, grey1, black, grey3, black, grey1, black, grey1, black, tree, black, reset, black, green, black, reset, black, reset, // line 34
    black, grey1, black, grey2, black, grey1, black, grey3, black, grey1, black, tree, black, reset, black, green, black, reset, black, green, black, reset, // line 35
    black, grey1, black, grey2, black, grey1, black, grey3, black, grey1, black, tree, black, reset, black, green, black, green, black, reset, // line 36
    black, grey1, black, grey2, black, grey1, black, grey3, black, grey1, black, reset, black, green, black, green, black, reset, // line 37
    black, grey1, black, grey2, black, grey1, black, grey1, black, grey3, black, grey1, black, reset, black, green, black, reset, // line 38
    black, grey1, black, grey2, black, grey1, black, grey1, black, grey3, black, grey1, black, reset, black, tree, black, reset, // line 39
    black, grey1, black, grey2, black, grey1, black, grey1, black, grey3, black, grey1, black, reset, black, tree, black, green, black, reset, // line 40
    black, grey1, black, grey2, black, grey1, black, grey3, black, grey1, black, reset, black, tree, black, reset, black, green, black, reset, // line 41
    black, grey1, black, grey2, black, grey1, black, grey3, black, grey1, black, tree, black, reset, black, tree, black, reset, black, green, black, reset, // line 42
    black, grey1, black, grey2, black, grey1, black, grey3, black, grey1,  black, grey1, black, tree, black, reset, black, tree, black, reset, black, green, black, reset, // line 43
    black, grey1, black, grey2, black, grey1, black, grey1, black, grey1, black, tree, black, reset, black, tree, black, reset, black, green, black, reset, // line 44
    black, grey1, black, grey1, black, grey1, black, tree, black, reset, black, tree, black, reset, black, reset, // line 45
    black, grey1, black, grey1, black, grey1, black, tree, black, reset, black, tree, black, reset, // line 46
    black, grey1, black, grey1, black, grey1, black, tree, black, reset, // line 47
    black, grey1, black, grey1, black, grey1, black, reset, // line 48
    black, grey1, black, reset, black, grey1, black, grey1, black, reset, // line 49
    black, reset, black, grey1, black, grey1, black, reset, // line 50
    black, grey1, black, grey1, black, grey1, black, reset, // line 51
    black, grey1, black, grey1, black, grey1, black, reset, // line 52
    black, grey1, black, reset, // line 53
    black, grey1, black, reset, // line 54
    black, grey1, black, reset, // line 55
    black, grey1, black, reset, // line 56
    black, grey1, black, tree, black, reset, // line 57
    black, grey1, black, tree, black, reset, // line 58
    black, grey1, black, tree, black, tree, black, reset, // line 59
    black, grey1, black, grey1, black, reset, // line 60
    black, grey1, black, grey1, black, reset, // line 61
    black, grey1, black, grey1, black, reset, // line 62
    black, grey1, black, grey1, black, reset, // line 63
    black, grey1, black, grey1, black, reset, // line 64
    black, grey1, black, reset, // line 65
    black, grey1, black, reset, // line 66
    black, grey1, black, reset, // line 66
    black, grey1, black, tree, black, reset, // line 67
    black, grey1, black, grey1, black, reset, // line 68
    black, grey1, black, grey1, black, grey1, black, reset, // line 69
    black, grey1, black, grey1, black, reset, // line 70
    black, grey1, black, grey1, black, reset, // line 71
    black, grey1, black, grey1, black, reset, // line 72
    black, grey1, black, tree, black, reset, // line 73
    black, reset, black, tree, black, reset, // line 74
    black, tree, black, reset, // line 75
    black, tree, black, reset, // line 76
    black, tree, black, reset, // line 77
    black, tree, reset, // line 78
    black, tree, reset, // line 79
    black, tree, reset, // line 80
  )
}
