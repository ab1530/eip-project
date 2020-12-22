//
//  SecondPage.swift
//  Epic2
//
//  Created by Abdel Lakhdari on 22/10/2020.
//

import Foundation
import UIKit
import WebKit


extension UIImageView {
    func downloaded(from url: URL, contentMode mode: UIView.ContentMode = .scaleAspectFit) {
        contentMode = mode
        URLSession.shared.dataTask(with: url) { data, response, error in
            guard
                let httpURLResponse = response as? HTTPURLResponse, httpURLResponse.statusCode == 200,
                let mimeType = response?.mimeType, mimeType.hasPrefix("image"),
                let data = data, error == nil,
                let image = UIImage(data: data)
                else { return }
            DispatchQueue.main.async() { [weak self] in
                self?.image = image
            }
        }.resume()
    }
    func downloaded(from link: String, contentMode mode: UIView.ContentMode = .scaleAspectFit) {
        guard let url = URL(string: link) else { return }
        downloaded(from: url, contentMode: mode)
    }
}


struct MyCell: Decodable {
    public let data:[MyCell2]
}


struct MyCell2: Decodable {
//    public let id: String
    public let title: String
//    public let description: String
//    public let datetime: Int
//    public let cover: String
//    public let cover_width: Int
//    public let cover_height: Int
//    public let            account_url: String
//    public let            account_id: Int
//    public let                privacy: String
//    public let                layout: String
//    public let   views: Int
//    public let   link: String
//    public let ups: Int
//    public let  downs: Int
//    public let  points: Int
//    public let          score: Int
//    public let  is_album: Bool
//    public let  vote: String
//    public let  favorite: Bool
//    public let  nsfw: Bool
//    public let  section: String
//    public let      comment_count: Int
//    public let  favorite_count: Int
//    public let  topic: String
//    public let  topic_id: Int
//    public let  images_count: Int
//    public let  in_gallery: Bool
//    public let  is_ad: Bool
////    public let  tags:
//    public let  ad_type: Int
//    public let  ad_url: String
//    public let  in_most_viral: Bool
//    public let  include_album_ads: Bool
                public let  images: [MyCell3]?
}

struct MyCell3: Decodable {
    public let link: String
}


class customCollectionViewCell: UICollectionViewCell {
    @IBOutlet weak var imageView: UIImageView!
    @IBOutlet weak var Label: UILabel!
    
}



class SecondPage: UIViewController, UICollectionViewDataSource {
    
    var myCells = [MyCell2]()
    @IBOutlet weak var collectionView: UICollectionView!
    
    @IBOutlet weak var searchBar: UISearchBar!
    var access_token:String = ""
    override func viewDidLoad() {
            super.viewDidLoad()
        
        


        collectionView.dataSource = self
//        let url = URL (string:"https://api.opendota.com/api/heroStats")
        var url = URLRequest(url: URL(string: "https://api.imgur.com/3/gallery/hot/viral/day")!,timeoutInterval: Double.infinity)
        url.addValue("f24a1a5fb9b771d", forHTTPHeaderField: "Authorization")
        url.addValue("accesstoken=" + access_token, forHTTPHeaderField: "Cookie")
        url.httpMethod = "GET"
        URLSession.shared.dataTask(with: url) { [self] (data, response, error) in
        
            guard let data = data, error == nil else {
                            fatalError(error!.localizedDescription)
                        }
                do {
               //     print(String(data: data, encoding: .utf8)!)
                    let decode = JSONDecoder()
                    decode.keyDecodingStrategy = .convertFromSnakeCase
                    let info = try decode.decode(MyCell.self, from: data)
              //      print("info\(info)")
                    self.myCells = info.data
                    //self.myCells = try JSONDecoder().decode([MyCell].self, from: data)

                //    print("test \(self.myCells)")
                    DispatchQueue.main.async {
                        self.collectionView.reloadData()
                        
                    }
                } catch {
                    print("Parse Error\(error)")
                }
                
                
            
        }.resume()
            
        }
    
    @IBAction func searchButton(_ sender: UIButton) {
//        searchBar.text
    }
    
    
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return myCells.count
    }

    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "customCell", for: indexPath) as! customCollectionViewCell
        cell.imageView.contentMode = .scaleAspectFill
//        let defaultLink = "https://i.imgur.com/"
        let completeLink =  myCells[indexPath.row].images?[0].link
        print("LIIIIIIINK::::::\(completeLink ?? "")")
//        let completeLink = "lvuRgEw"
        if (completeLink != nil) {
            cell.imageView.downloaded(from: completeLink!)
        }
        cell.Label.text = myCells[indexPath.row].title
        return cell
    }
    
    
}

