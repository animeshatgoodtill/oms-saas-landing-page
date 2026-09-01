import { stats } from "@/data/stats"
import Container from "@/components/Container"

const Stats: React.FC = () => {
    return (
        <section id="stats" className="bg-foreground py-16 lg:py-20">
            <Container>
                <h2 className="sr-only">The numbers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
                    {stats.map(stat => (
                        <div key={stat.title} className="text-center sm:text-left max-w-md sm:max-w-full mx-auto">
                            <p className="text-4xl md:text-5xl font-heading font-bold text-primary mb-3">
                                {stat.title}
                            </p>
                            <p className="text-background/70">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Stats
