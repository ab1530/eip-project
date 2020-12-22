//
//  scrollPage.swift
//  Epic2
//
//  Created by Abdel Lakhdari on 21/10/2020.
//

import Foundation

class Feed: ObservableObject, RandomAccessCollection {
    typealias Element = NewsListItems
    @Published var newsListItems = [NewsListItems]()
    
    var startIndex: Int {newsListItems.startIndex}
    var endIndex: Int {newsListItems.endIndex}
    
    subscript(position: Int) -> NewsListItems {
        return newsListItems[position]
    }
}

class NewsListItems: Identifiable {
    var uuid = UUID()
    
    var id: String
    var title: String
    var link: URL
    
    init (id: String, title:String, link: URL) {
        self.id = id
        self.title = title
        self.link = link
    }
}

