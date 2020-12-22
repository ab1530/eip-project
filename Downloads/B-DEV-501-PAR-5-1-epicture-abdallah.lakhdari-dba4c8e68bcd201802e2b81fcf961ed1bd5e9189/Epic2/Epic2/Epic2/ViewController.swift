//
//  ViewController.swift
//  Epic2
//
//  Created by Abdel Lakhdari on 21/10/2020.
//

import UIKit
import WebKit

extension ViewController: WKScriptMessageHandler {
    func userContentController(_ userContentController: WKUserContentController,
                               didReceive message: WKScriptMessage) {

        if (message.name == "setToken"){
            if let token = message.body as? String{
                print(token)
            }

        }
        print("Received message from native: \(message)")
    }
}


extension WKWebView {

    private var httpCookieStore: WKHTTPCookieStore  {
    return WKWebsiteDataStore.default().httpCookieStore
    }

    func getCookies(for domain: String? = nil, completion: @escaping ([String : Any])->())  {
        var cookieDict = [String : AnyObject]()
        httpCookieStore.getAllCookies { (cookies) in
            for cookie in cookies {
                if let domain = domain {
                    if cookie.domain.contains(domain) {
                        cookieDict[cookie.name] = cookie.properties as AnyObject?
                    }
                } else {
                    cookieDict[cookie.name] = cookie.properties as AnyObject?
                }
            }
            completion(cookieDict)
        }
    }
}


class ViewController: UIViewController, WKUIDelegate {

    var webView: WKWebView!

    override func loadView() {
           let webConfiguration = WKWebViewConfiguration()
           webView = WKWebView(frame: .zero, configuration: webConfiguration)
           webView.uiDelegate = self
           view = webView
        webConfiguration.userContentController.add(self, name: "setToken")
        webView.addObserver(self, forKeyPath: "URL", options: .new, context: nil)
    }
    
 ///////
    func stopLoading(access_token: String) {
  //          webView.removeFromSuperview()
            self.moveToVC(access_token: access_token)
        }

    func moveToVC(access_token: String)  {
            print("Write code where you want to go in app")
            // Note: [you use push or present here]
            let vc = self.storyboard?.instantiateViewController(withIdentifier:"SecondPage") as! SecondPage
        vc.access_token = access_token
         let tmp = navigationController
            self.navigationController?.pushViewController(vc, animated: true)
        }
    //////////
    // Observe value
    override func observeValue(forKeyPath keyPath: String?, of object: Any?, change: [NSKeyValueChangeKey : Any]?, context: UnsafeMutableRawPointer?){

        if let key = change?[NSKeyValueChangeKey.newKey] {
            print("observeValue \(key)") // url value
            let url = "\(key)"
            let replacedKey = url.replacingOccurrences(of: "#", with: "&")
            let accessToken = getQueryStringParameter(url: replacedKey, param: "access_token")
            print("access_token = \(String(describing: accessToken))")
//            let newViewController = ViewController()
//            self.navigationController?.pushViewController(newViewController, animated: true)
//
//            let vc = SecondPage(nibName: "SecondPage", bundle: nil)
//                vc.access_token = "Next level blog photo booth, tousled authentic tote bag kogi"
//
//                navigationController?.pushViewController(vc, animated: true)
            if (accessToken != nil) {
                stopLoading(access_token: accessToken!)
            }
        }


    }

    func getQueryStringParameter(url: String, param: String) -> String? {
      guard let url = URLComponents(string: url) else { return nil }
      return url.queryItems?.first(where: { $0.name == param })?.value
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        if (self.navigationController == nil) {
            print("aaa")
        }
        
        
    }
    
    override func viewDidLoad() {
            super.viewDidLoad()

            let myURL = URL(string: "https://api.imgur.com/oauth2/authorize" + "?client_id=f24a1a5fb9b771d" + "&response_type=token" + "&state=APPLICATION_STATE")
            let myRequest = URLRequest(url: myURL!)
            webView.load(myRequest)
        
            }
    
}


