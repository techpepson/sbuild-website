
import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, User } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

// This would typically come from an API or content management system
const getArticleById = (id: number) => {
  const articles = [
    {
      id: 1,
      title: "The Future of SaaS: Trends That Will Reshape Business Software in 2024",
      content: `<p class="mb-4">The SaaS industry continues to evolve at a remarkable pace, transforming how businesses operate across all sectors. As we look toward 2024, several key trends are emerging that will fundamentally reshape business software and create new opportunities for innovation.</p>
      
      <h2 class="text-2xl font-display font-semibold mt-8 mb-4">1. Vertical SaaS Takes Center Stage</h2>
      <p class="mb-4">While horizontal SaaS solutions that serve multiple industries have dominated the market, we're seeing a significant shift toward vertical SaaS – industry-specific solutions tailored to the unique needs of sectors like healthcare, finance, education, and more. These specialized platforms offer deeper functionality and compliance features that generic solutions cannot match.</p>
      <p class="mb-4">Companies like Veeva Systems in pharmaceuticals and Procore in construction have demonstrated the immense value of industry-focused software. In 2024, expect to see more vertical SaaS solutions emerging to address the specific challenges of previously underserved industries.</p>
      
      <h2 class="text-2xl font-display font-semibold mt-8 mb-4">2. AI Integration Becomes Table Stakes</h2>
      <p class="mb-4">Artificial intelligence is no longer a novelty feature but an essential component of modern SaaS solutions. From intelligent automation to predictive analytics and natural language processing, AI capabilities are becoming deeply embedded in business software across all categories.</p>
      <p class="mb-4">In 2024, we expect to see more sophisticated AI implementations that move beyond basic automation to deliver truly intelligent insights and decision support. Companies that fail to meaningfully incorporate AI into their SaaS offerings will increasingly find themselves at a competitive disadvantage.</p>
      
      <h2 class="text-2xl font-display font-semibold mt-8 mb-4">3. The Rise of Composable Applications</h2>
      <p class="mb-4">The one-size-fits-all approach to software is giving way to composable applications – modular systems that allow businesses to assemble their ideal solution from best-of-breed components. This architecture enables organizations to be more agile and responsive to changing requirements.</p>
      <p class="mb-4">API-first design and robust integration capabilities will be critical success factors for SaaS providers in this environment. The most successful platforms will offer extensibility without sacrificing ease of use or coherence of experience.</p>
      
      <h2 class="text-2xl font-display font-semibold mt-8 mb-4">4. Enhanced Security and Compliance Features</h2>
      <p class="mb-4">As data privacy regulations continue to evolve globally, SaaS providers are responding with more sophisticated security and compliance capabilities. Advanced encryption, granular access controls, and comprehensive audit trails are becoming standard features rather than premium add-ons.</p>
      <p class="mb-4">In 2024, expect to see SaaS platforms offering more region-specific compliance features to address varying regulatory requirements across different markets. This will be particularly important for companies operating internationally.</p>
      
      <h2 class="text-2xl font-display font-semibold mt-8 mb-4">5. Improved User Experience and Accessibility</h2>
      <p class="mb-4">As competition in the SaaS space intensifies, user experience has emerged as a critical differentiator. Companies are investing heavily in intuitive interfaces, streamlined workflows, and features that reduce friction and cognitive load.</p>
      <p class="mb-4">Accessibility is also gaining prominence, with more SaaS providers ensuring their products can be used effectively by people with disabilities. This focus on inclusive design not only expands the potential user base but also aligns with growing corporate social responsibility initiatives.</p>
      
      <h2 class="text-2xl font-display font-semibold mt-8 mb-4">Conclusion</h2>
      <p class="mb-4">The SaaS landscape continues to evolve rapidly, creating both challenges and opportunities for businesses. By staying attuned to these emerging trends, organizations can make informed decisions about their software investments and position themselves for success in an increasingly digital business environment.</p>
      <p class="mb-4">As we move into 2024, the most successful SaaS companies will be those that combine technical innovation with a deep understanding of their users' needs and challenges. The future of business software is not just about features and functionality—it's about delivering meaningful outcomes and enabling new ways of working.</p>`,
      date: "May 8, 2024",
      readTime: "7 min read",
      author: "Sarah Chen",
      category: "Industry Trends",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80", 
      authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
      authorRole: "Senior Technology Analyst"
    },
    {
      id: 2,
      title: "How Cloud Migration Can Reduce Your IT Costs by 35%",
      content: `<p class="mb-4">Cloud migration represents one of the most significant opportunities for businesses to reduce their IT costs while simultaneously improving capabilities and scalability. Based on our research and client engagements, organizations that strategically migrate to the cloud typically achieve cost savings of 20-35% compared to traditional on-premises infrastructure.</p>
      
      <h2 class="text-2xl font-display font-semibold mt-8 mb-4">Understanding the Cost Advantages</h2>
      <p class="mb-4">The financial benefits of cloud migration stem from several fundamental advantages over traditional IT approaches:</p>
      
      <h3 class="text-xl font-display font-medium mt-6 mb-3">1. Elimination of Capital Expenditure</h3>
      <p class="mb-4">Perhaps the most obvious benefit is the shift from capital expenditure (CapEx) to operational expenditure (OpEx). Instead of making large upfront investments in hardware that begins depreciating immediately, cloud services allow businesses to pay only for what they use on a subscription basis.</p>
      <p class="mb-4">This approach not only preserves capital but also improves cash flow predictability and reduces financial risk associated with technology investments.</p>
      
      <h3 class="text-xl font-display font-medium mt-6 mb-3">2. Reduced Infrastructure Maintenance</h3>
      <p class="mb-4">Maintaining on-premises infrastructure requires dedicated staff, specialized skills, and ongoing investments in updates, security patches, and hardware refreshes. Cloud providers handle most of these responsibilities as part of their service, allowing organizations to reallocate IT resources to more strategic initiatives.</p>
      <p class="mb-4">Our analysis shows that infrastructure maintenance typically consumes 15-20% of IT budgets, making this a significant area for potential savings.</p>
      
      <h3 class="text-xl font-display font-medium mt-6 mb-3">3. Optimized Resource Utilization</h3>
      <p class="mb-4">Traditional IT environments are often overprovisioned to handle peak loads, resulting in resources sitting idle much of the time. Cloud environments allow for dynamic scaling, enabling businesses to pay only for the computing resources they actually use.</p>
      <p class="mb-4">Advanced cloud cost optimization techniques like auto-scaling, reserved instances, and spot pricing can further enhance these savings. Companies that implement comprehensive optimization strategies routinely reduce their cloud spend by 25-30%.</p>
      
      <h2 class="text-2xl font-display font-semibold mt-8 mb-4">Real-World Examples</h2>
      <p class="mb-4">To illustrate these benefits, let's look at three case studies from organizations that have successfully migrated to the cloud:</p>
      
      <h3 class="text-xl font-display font-medium mt-6 mb-3">Case Study 1: Mid-Size Financial Services Firm</h3>
      <p class="mb-4">A financial services company with approximately 500 employees migrated their infrastructure to AWS over a 6-month period. After migration, they experienced:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">41% reduction in total infrastructure costs</li>
        <li class="mb-2">62% decrease in time spent on maintenance and updates</li>
        <li class="mb-2">28% improvement in application performance</li>
      </ul>
      <p class="mb-4">The company achieved full ROI on their migration costs within 11 months.</p>
      
      <h3 class="text-xl font-display font-medium mt-6 mb-3">Case Study 2: Healthcare Provider</h3>
      <p class="mb-4">A regional healthcare provider migrated their patient management systems and data storage to a hybrid cloud solution, resulting in:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">32% overall cost reduction</li>
        <li class="mb-2">Improved compliance capabilities</li>
        <li class="mb-2">50% faster deployment of new features and services</li>
      </ul>
      <p class="mb-4">The migration also enabled them to implement advanced data analytics that improved patient outcomes and operational efficiency.</p>
      
      <h2 class="text-2xl font-display font-semibold mt-8 mb-4">Implementation Considerations</h2>
      <p class="mb-4">While the potential savings are substantial, achieving them requires careful planning and execution. Organizations should consider the following factors when planning a cloud migration:</p>
      
      <ol class="list-decimal pl-6 mb-4">
        <li class="mb-2"><strong>Comprehensive assessment:</strong> Thoroughly evaluate your current infrastructure, applications, and usage patterns before migration.</li>
        <li class="mb-2"><strong>Rightsizing:</strong> Ensure cloud resources match actual needs rather than simply replicating on-premises configurations.</li>
        <li class="mb-2"><strong>Rearchitecting when appropriate:</strong> Some applications may require redesign to fully leverage cloud benefits.</li>
        <li class="mb-2"><strong>Ongoing optimization:</strong> Implement continuous monitoring and adjustment of cloud resources.</li>
      </ol>
      
      <h2 class="text-2xl font-display font-semibold mt-8 mb-4">Conclusion</h2>
      <p class="mb-4">Cloud migration offers significant cost-saving opportunities for organizations of all sizes. While the journey requires careful planning and execution, the financial benefits—combined with improved agility, scalability, and security—make it a compelling strategy for businesses looking to optimize their IT investments.</p>
      <p class="mb-4">For most organizations, the question is no longer whether to move to the cloud, but how to do so most effectively to maximize both financial and operational benefits.</p>`,
      date: "May 2, 2024",
      readTime: "5 min read",
      author: "Michael Reeves",
      category: "Cloud Solutions",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80",
      authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
      authorRole: "Cloud Solutions Architect"
    },
    // Add more articles as needed
  ];
  
  return articles.find(article => article.id === id);
};

const InsightDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const articleId = parseInt(id || '1');
  const article = getArticleById(articleId);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (!article) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist or has been moved.</p>
            <Button onClick={() => navigate('/insights')} className="bg-sbuild hover:bg-sbuild/90">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Insights
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const nextArticleId = articleId < 2 ? articleId + 1 : null;
  const prevArticleId = articleId > 1 ? articleId - 1 : null;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1" ref={ref}>
        {/* Header */}
        <section className="pt-12 pb-8 md:pt-20 md:pb-12 bg-gradient-to-br from-sbuild/5 to-cyan-500/5">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="max-w-4xl mx-auto">
              <div className={cn(
                "transition-all duration-700 transform",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}>
                <div className="flex items-center gap-2 mb-6 text-sbuild">
                  <Link to="/insights" className="inline-flex items-center text-sm hover:underline">
                    <ArrowLeft className="mr-1 h-4 w-4" />
                    Back to Insights
                  </Link>
                  <span className="text-gray-300">|</span>
                  <span className="text-sm text-muted-foreground">{article.category}</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold tracking-tight mb-6">
                  {article.title}
                </h1>

                <div className="flex items-center gap-4 mt-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <img 
                        src={article.authorImage} 
                        alt={article.author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{article.author}</div>
                      <div className="text-sm text-muted-foreground">{article.authorRole}</div>
                    </div>
                  </div>
                  <span className="text-gray-300">|</span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-3.5 w-3.5" />
                    {article.date}
                  </div>
                  <span className="text-gray-300">|</span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-1 h-3.5 w-3.5" />
                    {article.readTime}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className={cn(
              "max-w-4xl mx-auto overflow-hidden rounded-xl shadow-md border border-gray-100/80",
              "transition-all duration-700 transform",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              "delay-100"
            )}>
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-auto object-cover"
                style={{ maxHeight: "500px" }}
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8 md:py-12">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="max-w-3xl mx-auto">
              <div className={cn(
                "prose prose-lg max-w-none",
                "transition-all duration-700 transform",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                "delay-200"
              )}
              dangerouslySetInnerHTML={{ __html: article.content }}>
              </div>

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center">
                    <Button variant="outline" size="sm" className="rounded-full mr-2">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share This Article
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {prevArticleId && (
                      <Link to={`/insights/${prevArticleId}`}>
                        <Button variant="outline" size="sm" className="rounded-full">
                          <ArrowLeft className="h-4 w-4 mr-2" />
                          Previous Article
                        </Button>
                      </Link>
                    )}
                    
                    {nextArticleId && (
                      <Link to={`/insights/${nextArticleId}`}>
                        <Button variant="outline" size="sm" className="rounded-full">
                          Next Article
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-12 bg-gray-50">
          <div className="container px-4 mx-auto max-w-7xl">
            <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mb-8 text-center">
              Related Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {Array.from({ length: 3 }).map((_, index) => {
                const relatedId = ((articleId + index) % 2) + 1;
                const relatedArticle = getArticleById(relatedId);
                if (!relatedArticle) return null;
                
                return (
                  <div 
                    key={index} 
                    className={cn(
                      "overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100/80 bg-white",
                      "transition-all duration-500 transform",
                      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                      `delay-${(index + 3) * 100}`
                    )}
                  >
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={relatedArticle.image} 
                        alt={relatedArticle.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <Calendar className="mr-1 h-3.5 w-3.5" />
                        {relatedArticle.date}
                      </div>
                      
                      <Link to={`/insights/${relatedArticle.id}`}>
                        <h3 className="text-lg font-display font-semibold mb-4 hover:text-sbuild transition-colors line-clamp-2">
                          {relatedArticle.title}
                        </h3>
                      </Link>
                      
                      <Link to={`/insights/${relatedArticle.id}`} className="text-sbuild hover:underline inline-flex items-center text-sm font-medium">
                        Read Article <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InsightDetails;
